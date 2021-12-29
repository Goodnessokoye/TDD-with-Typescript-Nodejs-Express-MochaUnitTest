import "dotenv";
import express,  {Application }from "express";
import createServer from "server";


const startServer = () => {
  const app = createServer();
  const port: Number = parseInt(<string>process.env.PORT, 10) || 3000;

  app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
};
startServer();
 