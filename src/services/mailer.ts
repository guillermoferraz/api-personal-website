import { templateResponseContact } from "templates/responseContact";
import env from "constants/config";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

interface AutoResponseContactTypes {
  name: string;
  email: string;
  message: string;
  company?: string;
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
        subject: "Guillermo Ferraz Web Response",
        text: "Respuesta test automatizada",
        html: templateResponseContact(),
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
