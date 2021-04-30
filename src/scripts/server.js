const http = require("http");
const host = 'localhost';
const port = 5500;

const requestListener = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/javascript' });
  res.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});