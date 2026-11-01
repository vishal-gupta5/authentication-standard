import { createServer } from "node:http";
import { createApplication } from "./app/index.js";

const main = async () => {
  try {
    const app = createApplication();

    const server = createServer(app);
    const PORT: number = 8080;

    server.listen(PORT, () => {
      console.log(`http server is running on ${PORT}`);
    });
  } catch (error) {
    console.log(`Error starting http server`);
    throw error;
  }
};

main();
