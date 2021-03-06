import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import MailersServices from "services/mailer";

const router = Router();

const MailerRouter = (app: Router) => {
  app.use("/mailer", router);
  const MailerService = new MailersServices();

  router.post(
    "/contact",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const success = await MailerService.autoResponseContact(req.body);
        res.json(success);
      } catch (err) {
        console.error(err);
        next(err);
      }
    }
  );
};
export default MailerRouter;
