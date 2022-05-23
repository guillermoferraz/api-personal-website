import express from "express";
import config from "constants/config";

async function startServer() {
  const app = express();

  app.listen(config.port, () => {
    console.log(`
   +------------------------------+
  /	SERVER ON PORT ${config.port}      /
 +------------------------------+
		`);
  });
}
startServer();
