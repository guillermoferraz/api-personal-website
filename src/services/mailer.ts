import { templateResponseContact } from "templates/responseContact";
import { templateReplyPersonalEmail } from "templates/replyToPersonalEmail";
import env from "constants/config";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

interface AutoResponseContactTypes {
  name: string;
  email: string;
  message: string;
  company?: string;
  lng: string;
}

export default class MailersServices {
  public async autoResponseContact(
    data: AutoResponseContactTypes
  ): Promise<any> {
    try {
      console.log("DATA:", data);
      const transporter = nodemailer.createTransport({
        service: env.smtp.service,
        auth: {
          type: env.smtp.authType,
          user: env.smtp.user,
          pass: env.smtp.pass,
        },
      });
      await transporter.sendMail({
        from: env.smtp.user,
        to: `${data.email}`,
        subject: env.smtp.subject,
        text: "Respuesta test automatizada",
        html: templateResponseContact(data),
      });
      /* Reply to personal email */
      await transporter.sendMail({
        from: env.smtp.user,
        to: env.smtp.personalEmail,
        subject: env.smtp.personalSubject,
        text: "Nuevo mensaje de Web Personal",
        html: templateReplyPersonalEmail(data),
      });
      console.log(`
                  +----------------+
                  | E-MAIL SENT:✅ |
                  +----------------+`);
      return { response: "SUCCESS" };
    } catch (err) {
      console.error(err);
    }
  }
}
