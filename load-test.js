const http = require("http");
const { Worker, isMainThread, workerData } = require("worker_threads");

if (isMainThread) {
  // Main thread spawns worker threads
  const numRequests = 1000; // Total requests to simulate
  const concurrency = 100; // Concurrent connections

  for (let i = 0; i < concurrency; i++) {
    new Worker(__filename, {
      workerData: { requests: numRequests / concurrency },
    });
  }
} else {
  // Worker thread makes requests
  const makeRequest = () => {
    return new Promise((resolve) => {
      http
        .get("http://localhost:3000/api/data", (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve(JSON.parse(data)));
        })
        .on("error", () => resolve(null));
    });
  };

  (async () => {
    const start = Date.now();
    const promises = [];

    for (let i = 0; i < workerData.requests; i++) {
      promises.push(makeRequest());
    }

    await Promise.all(promises);
    console.log(
      `Worker completed ${workerData.requests} requests in ${
        Date.now() - start
      }ms`
    );
  })();
}
