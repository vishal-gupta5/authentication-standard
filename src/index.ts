import { createServer } from "node:http";

const main = async () => {
  try {
    const server = createServer();
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
