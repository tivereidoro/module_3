# Mini Project Assessment - Create a simple REST API with Express.js

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&labelColor=black&logo=node.js&logoColor=white) &nbsp;
![ExpressJS Badge](https://img.shields.io/badge/-Express.JS-404D59?style=flat&labelColor=black&logo=express&logoColor=FF781F)

A lightweight REST API for user management. Implements full CRUD operations with in-memory storage and appropriate error handling. Built with **Node.js**, **Express.js**, and proper **RESTful principles**.

<br>

## Table of Contents

- [Objective](#🎯-objective)
- [Project Tasks](#📌-project-tasks)
- [Features](#🏷️-features)
- [Setup](#🚀-setup-instructions)
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
   cd user-management-api
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

| Method | Endpoint   | Description                |
| ------ | ---------- | -------------------------- |
| GET    | /users     | Retrieve all users         |
| GET    | /users/:id | Retrieve single user by id |
| POST   | /users     | Create new user            |
| PUT    | /users/:id | Update user by id          |
| DELETE | /users/:id | Delete user by id          |

### Example Requests:

## ⚙️ Testing the API:

### Test with Postman or cURL:

1. Create User: &nbsp; ( POST `/users`)

Request body:

```
   {
      "firstname": "Jane",
      "lastname": "Smith",
      "email": "jane@example.com",
      "age": 24,
      "description": "Graphic Designer"
   }
```

**OR**

```
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"firstname":"Jane","lastname":"Smith","email":"jane@example.com","password":"pass123"}'
```

## 📂 Project Structure

```
user-management-api/
├── index.js           # Main application file
├── package.json
├── README.md          # This file
└── test/              # Test cases
    └── api.test.js
```

## 📜 License:

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

...
