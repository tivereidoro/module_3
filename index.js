import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Initializations;
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());

// Routes;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Listening to the server;
app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);
