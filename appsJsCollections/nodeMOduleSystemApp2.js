import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.write("/");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify({ id: 1 }));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
