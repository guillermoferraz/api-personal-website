import dotenv from "dotenv";
dotenv.config();

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: process.env.PORT || 8000,
  api: {
    prefix: "/api",
  },
  smtp: {
    host: process.env.SMTP_HOST as string,
    service: process.env.SMTP_SERVICE as string,
    port: process.env.SMTP_PORT,
    secure: process.env.SMPT_SECURE as string,
    authType: process.env.SMPT_AUTH_TYPE as string,
    user: process.env.SMTP_USER as string,
    pass: process.env.SMTP_PASS as string,
  },
};
