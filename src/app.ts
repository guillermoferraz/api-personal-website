import express from "express";
import config from "constants/config";

async function startServer() {
  const app = express();

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require("./loaders").default({ expressApp: app });
  app.listen(config.port, () => {
    console.log(`
   +------------------------------+
  /	SERVER ON PORT ${config.port}      /
 +------------------------------+`);
  });
}
startServer();
