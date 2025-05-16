import { nanoid } from "nanoid";

// In-memory database;
let users = [
  {
    id: "1",
    firstname: "John",
    lastname: "Doe",
    email: "demo@email.com",
    age: 24,
    description: "Data Analyst",
  },
  {
    id: "1",
    firstname: "Jke",
    lastname: "Gaye",
    email: "gaye@email.com",
    age: 14,
    description: "Young Developer",
  },
];

/**
 * Fetch all users
 * using GET requests to the "/api/users" endpoint.
 * @param {*} req - The request object.
 * @param {*} res - The response object.
 * @returns {void}
 * @description This function retrieves all users from database and sends them as a response.
 */
export const getUsers = (req, res) => {
  res.send(users);
};

/**
 * Create a new user
 * using POST requests to the "/api/users" endpoint.
 * @param {*} req - The request object containing the user data in the request body.
 * @param {*} res - The response object used to send the response back to the client.
 * @returns {void}
 * @description This function creates a new user and adds it to the database.
 */
export const createUser = (req, res) => {
  const user = req.body;

  // User validation
  if (
    !user ||
    !user.firstname ||
    !user.lastname ||
    !user.email ||
    !user.age ||
    !user.description
  ) {
    console.log("Invalid user data");
    return res.status(400).send("Invalid user data");
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.email === user.email);
  if (existingUser) {
    console.log("User already exists");
    return res.status(409).send("User already exists");
  }

  users.push({ id: nanoid(10), ...user });
  console.log(`User added:\n`, user);
  // Send a success message
  res.status(201).send(`Success! User '${user.firstname}' added!`);
};

/**
 * Fetch a user by ID
 * using GET requests to the "/api/users/:id" endpoint.
 * @param {*} req - The request object containing the user ID in the URL parameters.
 * @param {*} res - The response object used to send the response back to the client.
 * @returns {void}
 * @description This function retrieves a user by ID and sends it as a response.
 */
export const getUserById = (req, res) => {
  const { id } = req.params;

  console.log(`Checking for user with ID: ${id}`);
  const foundUser = users.find((user) => user.id === id);

  // Check if user with the specified ID exists
  if (!foundUser) {
    console.log(`User not found!!`);
    return res.status(404).send("User not found");
  }
  console.log(`User found:\n`, foundUser);
  res.send(foundUser);
};

/**
 * Delete a user by ID
 * from DELETE requests to the "/users/:id" endpoint.
 * @param req - The request object containing the user ID in the URL parameters.
 * @param res - The response object used to send the response back to the client.
 * @returns --
 */
export const deleteUserById = (req, res) => {
  const { id } = req.params;

  // Filter out the user with the specified ID from the users array.
  // users = users.filter((user) => user.id !== id);

  // Get index of the user with the ID.
  // If user is found, remove it
  // from the users array and send a success message.
  // else, send a 404 error message.
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  // Remove the user from the array
  users.splice(userIndex, 1);
  console.log(`User with ID: ${id} has been deleted.!!!`);
  res.send(`User with ID: ${id} has been deleted!!`);
};

/**
 * Update a user by ID
 * using PATCH requests to the "/users/:id" endpoint.
 * @param req - The request object containing the user ID in the URL parameters.
 * @param res - The response object used to send the response back to the client.
 * @returns void
 * @description This function updates a user by ID and sends a success message.
 */
export const updateUserById = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email, age, description } = req.body;

  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }

  // Update the user object with the new data from the request body
  // Object.assign(user, req.body);

  if (firstname) user.firstname = firstname;
  if (lastname) user.lastname = lastname;
  if (email) user.email = email;
  if (age) user.age = age;
  if (description) user.description = description;
  // Alternatively, you can use the spread operator to create a new user object
  // and replace the old one in the array.
  // users = users.map((user) => (user.id === id ? { ...user, ...req.body } : user));

  res.send(`User with ID: ${id} updated!!`);
};
