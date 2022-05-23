import { Router } from "express";
import MailerRouter from "./mailer";

export default () => {
  const app = Router();
  MailerRouter(app);
  return app;
};
