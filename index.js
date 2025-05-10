const http = require("http");
const cluster = require("cluster");
const os = require("os");

// Mock database function with intentional delay
const fetchFromDB = async () => {
  return new Promise((resolve) => {
    // Simulate a delay to mimic database fetch
    setTimeout(() => {
      resolve({ data: "Sample response", timestamp: Date.now() });
    }, 100);
  });
};

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers equal to CPU cores
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);

    // Restart worker
    cluster.fork();
  });
} else {
  // Create HTTP server
  const server = http.createServer(async (req, res) => {
    if (req.url === "/api/data" && req.method === "GET") {
      try {
        const data = await fetchFromDB();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
      } catch (err) {
        res.writeHead(500);
        res.end("Server Error");
      }
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  });

  server.listen(3000, () => {
    console.log(`Worker ${process.pid} started on port 3000`);
  });
}
