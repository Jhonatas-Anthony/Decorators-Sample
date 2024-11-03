const http = require("http");

class Server {
  getHelloWorld(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  }

  postProtectedData(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ message: "Acesso autorizado e dados recebidos!" })
    );
  }
}

const serverInstance = new Server();

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/hello") {
    serverInstance.getHelloWorld(req, res);
  } else if (req.method === "POST" && req.url === "/protected") {
    serverInstance.postProtectedData(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página não encontrada!");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});