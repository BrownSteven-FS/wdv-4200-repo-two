const { SECRET_QUESTION, SECRET_ANSWER } = require("./env-vars");

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const fs = require("fs");
const directoryName = "./";
const filenames = fs.readdirSync(directoryName);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  let fileContents = "";
  filenames.forEach((file) => {
    fileContents += file + "\n";
  });

  res.end(fileContents);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  rl.question(SECRET_QUESTION, () => {
    console.log(`The meaning of life is: ${SECRET_ANSWER}`);
    rl.close();
  });
});
