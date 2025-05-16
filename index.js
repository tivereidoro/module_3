import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import usersRoutes from "./usersRoutes.js";

// Initializations;
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
export const usersAPI_URL = "/api/users";

// Middleware to parse JSON data;
app.use(express.json());
app.use(bodyParser.json());
app.use(usersAPI_URL, usersRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// ------ Error Handlers ------
// ============================
// Handle 404 - Catch-all for invalid routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    error: {
      code: "ROUTE_NOT_FOUND",
      message: `Route ${req.method} ${req.originalUrl} not found`,
      suggestedActions: [
        "Check the API documentation",
        "Verify the endpoint URL",
        "Ensure proper HTTP method (GET/POST/PUT/DELETE)",
      ],
    },
  });
});

// Handle malformed JSON requests
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      error: {
        code: "INVALID_JSON",
        message: "Malformed JSON payload",
        details: err.message,
      },
    });
  }
  next(err);
});

// Handle unsupported content types
app.use((req, res, next) => {
  if (
    req.headers["content-type"] &&
    !req.headers["content-type"].includes("application/json")
  ) {
    return res.status(415).json({
      success: false,
      error: {
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "Content-Type must be application/json",
      },
    });
  }
  next();
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] Error:`, err);
  res.status(500).json({
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected error occurred",
    },
  });
});

// Listening to server;
app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);
