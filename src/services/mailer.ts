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
      console.log("AUTO RESPONSE CONTACT ACTIVE");
      console.log("DATA:", data);
      return { response: "SUCCESS" };
    } catch (err) {
      console.error(err);
    }
  }
}
