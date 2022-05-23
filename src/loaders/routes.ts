import express from "express";
import routers from "../routers/index";
import config from "../constants/config";

export default ({ app }: { app: express.Application }) => {
  app.use(config.api.prefix, routers());
  console.log("✅ API: OK");
};
