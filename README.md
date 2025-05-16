# Mini Project Assessment - Create a simple REST API with Express.js

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&labelColor=black&logo=node.js&logoColor=white) &nbsp;
![ExpressJS Badge](https://img.shields.io/badge/-Express.JS-404D59?style=flat&labelColor=black&logo=express&logoColor=FF781F)

A lightweight REST API for user management. Implements full CRUD operations with in-memory storage and appropriate error handling. Built with **Node.js**, **Express.js**, and proper **RESTful principles**.

<br>

## Table of Contents

- [Objective](#🎯-objective)
- [Project Tasks](#📌-project-tasks)
- [Features](#🏷️-features)
- [Setup and installation](#🚀-setup-instructions)
- [API Documentation](#📝-api-documentation)
  - [Endpoints](#endpoints)
  - [Examples](#example-requests)
- [Testing](#⚙️-testing-the-api)
- [Project Structure](#📂-project-structure)
- [License](#📜-license)

##

##

## 🎯 Objective:

The goal of this assessment is to create a simple REST API using Express.js, demonstrating my understanding of Node.js, Express.js, and RESTful API principles.

## 📌 Project Tasks:

- Set up the API with Express.js.
- Create routes to implement CRUD operations including; GET, POST, PUT, DELETE items by ID.
- Data management: in-memory data store and proper validation for incoming data.
- Handle appropriate error responses and validate request params and body data.
- Test API endpoints with Postman.

## 🏷️ Features

- ✅ Full CRUD operations
- ✅ Data validation
- ✅ Error handling
- ✅ RESTful design
- ✅ In-memory storage
- ✅ JSON request/response

## 🚀 Setup Instructions

### Prerequisites

- Node.js v14+
- npm or yarn

### Installation

1. Clone repository:

   ```bash
   git clone https://github.com/tivereidoro/module_3.git

   cd module_3
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm start
   ```

Server runs on `http://localhost:5000`

## 📝 API Documentation:

### Base URL:

`http://localhost:5000`

### Root URL route ("/"):

Returns - `Hello, World!`

### Endpoints:

| Method | Endpoint       | Description                |
| :----- | :------------- | :------------------------- |
| GET    | /api/users     | Retrieve all users         |
| GET    | /api/users/:id | Retrieve single user by id |
| POST   | /api/users     | Create new user            |
| PUT    | /api/users/:id | Update user by id          |
| DELETE | /api/users/:id | Delete user by id          |

### Example Requests:

**1. Create User: &nbsp; ( POST &nbsp; `/api/users`)**

Request body:

```
   {
      "firstname": "Jane",
      "lastname": "Smith",
      "email": "jane@email.com",
      "age": 24,
      "description": "Graphic Designer"
   }
```

An ID will be automatically generated for each user on the server.

**Expected response: (200 OK):**

`Success! User 'Jane' added!`

<br>

**2. Get All Users: &nbsp; ( GET &nbsp; `/api/users`)**

Request URL:

```
   http://localhost:5000/api/users
```

**Expected response: (200 OK)**

```
[
   {
      id: "scx54-e348",
      firstname: "Jane",
      lastname: "Smith",
      email: "jane@email.com",
      age: 24,
      description: "Graphic Designer"
   },
]
```

<br>

**3. Get a user by ID: &nbsp; ( GET &nbsp; `/api/users/:id`)**

Request URL:

```
   http://localhost:5000/api/users/scx54-e348
```

**Expected response: (200 OK)**

```
   {
      id: "scx54-e348",
      firstname: "Jane",
      lastname: "Smith",
      email: "jane@email.com",
      age: 24,
      description: "Graphic Designer"
   }
```

<br>

**4. Modify user data by ID: &nbsp; ( PUT &nbsp; `/api/users/:id`)**

Request URL:

```
   http://localhost:5000/api/users/scx54-e348
```

Request body:

```
   {
      "age": 25,
      "description": "UI/UX Designer"
   }
```

**Expected response: (201 OK)**

`Updated user with ID: 'scx54-e348'`

<br>

**5. Delete user data by ID: &nbsp; ( DELETE &nbsp; `/api/users/:id`)**

Request URL:

```
   http://localhost:5000/api/users/scx54-e348
```

**Expected response: (201 OK)**

`User with ID: 'scx54-e348' has been deleted!!`

<br>

## ⚙️ Testing the API:

### Test with Postman or cURL:

Open Postman, select the required request method (GET/POST/PUT/DELETE) and input a json data into the body section where necessary, then click send to get the response.

**OR**

Use cURL on the CLI to test send request to the endpoint. Here is an example;

```
curl -X POST http://localhost:5000/api/users \
-H "Content-Type: application/json" \
-d '{"firstname":"Jane","lastname":"Smith","email":"jane@email.com", "age":"24", "description":"Graphic Designer"}'
```

## 📂 Project Structure

```
user-management-api/
|
├── routes/
|   └── users.js    # Contains API routes for /api/users endpoint
├── controllers/
|   └── users.js    # Contains functions that execute the API logic
|
├── index.js        # Main application file
├── LICENSE
├── package.json
├── .gitignore
└── README.md


```

## 📜 License:

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👨🏽‍💻 Author:

Application written by [Tivere IDORO](https://www.tivere.tech).

...
