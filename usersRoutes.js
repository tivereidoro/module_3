import express from "express";
import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from "./usersControllers.js";
import { usersAPI_URL } from "./index.js";

// Get router object from express
const router = express.Router();

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} request sent to: ${usersAPI_URL}${req.url}`);
  next();
});

// GET: /users
// Fetch all users
router.get("/", getUsers);

// POST: /users
// Add a new user
router.post("/", createUser);

// GET: fetch a user by ID
router.get("/:id", getUserById);

// DELETE: delete a user by ID
router.delete("/:id", deleteUserById);

// PUT: update a user by ID
router.put("/:id", updateUserById);

// ==========

export default router;

// This code defines a simple Express router that handles GET requests to the "/users" endpoint.
// When a GET request is made to this endpoint, it logs a message to the console and sends a response back to the client.
// The router is then exported for use in other parts of the application.
// This is a common pattern in Express applications, where routes are defined in separate files for better organization and maintainability.
// The router can be mounted in the main application file (e.g., index.js) using app.use('/api', usersRouter);
// This allows for a clean separation of concerns and makes it easier to manage different routes in the application.
// The router can be used to define additional routes related to user management, such as creating, updating, or deleting users.
// This modular approach helps keep the codebase organized and maintainable as the application grows.
// The router can be extended with more routes as needed, such as:
// - POST /users: Create a new user
// - PUT /users/:id: Update an existing user
// - DELETE /users/:id: Delete a user
// - GET /users/:id: Get a specific user by ID
// This allows for a RESTful API design, where each route corresponds to a specific action on the user resource.
// The router can also be used to handle middleware functions, such as authentication or validation, for the user routes.
// This allows for a clean separation of concerns and makes it easier to manage different routes in the application.
// The router can be mounted in the main application file (e.g., index.js) using app.use('/api', usersRouter);
// This allows for a clean separation of concerns and makes it easier to manage different routes in the application.
