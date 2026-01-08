# Node.js + MySQL MVC Project with Versioned APIs

This is a **full-stack Node.js project** demonstrating a **structured MVC architecture** with **versioned APIs (v1 & v2)**.  
The project allows users to **submit their name and email** through a form, store it in a **MySQL database**, and fetch all users using a **GET API**.  

Versioning shows how APIs evolve over time without breaking old clients.

---

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Run the Project](#run-the-project)
- [API Documentation](#api-documentation)
- [How It Works](#how-it-works)
- [License](#license)

---

## Features

- **MVC Architecture**: Models, Controllers, Routes separated for clarity.  
- **Versioned APIs**: `/api/v1` for old clients, `/api/v2` for new features.  
- **POST API**: Submit user data.  
- **GET API**: Fetch all users.  
- **Frontend form**: Simple HTML page to submit and view users.  
- **JSON responses**: Easy to integrate with other apps.

---

## Folder Structure

```

project/
├─ server.js                  # Main server
├─ index.html                 # Frontend form
├─ package.json               # Node.js dependencies
├─ config/
│   └─ db.js                  # Database connection
├─ models/
│   └─ userModel.js           # Database queries
├─ controllers/
│   ├─ v1/
│   │   └─ userController.js  # v1 API logic
│   └─ v2/
│       └─ userController.js  # v2 API logic
└─ routes/
├─ v1/
│   └─ userRoutes.js      # v1 API routes
└─ v2/
└─ userRoutes.js      # v2 API routes

````

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd project
````

2. Install dependencies:

```bash
npm install
```

3. Make sure **Node.js** and **MySQL** are installed on your system.

---

## Database Setup

1. Login to MySQL:

```bash
mysql -u root -p
```

2. Create database and table:

```sql
CREATE DATABASE formdb;

USE formdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),               -- optional for v2
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Run the Project

```bash
node server.js
```

Open your browser and go to:

```
http://localhost:3000
```

* Fill the form and submit.
* View all users below the form.

---

## API Documentation

### **v1 API** (name + email only)

| Method | URL              | Description   | Body Parameters |
| ------ | ---------------- | ------------- | --------------- |
| POST   | `/api/v1/submit` | Submit user   | name, email     |
| GET    | `/api/v1/all`    | Get all users | none            |

### **v2 API** (name + email + phone)

| Method | URL              | Description              | Body Parameters    |
| ------ | ---------------- | ------------------------ | ------------------ |
| POST   | `/api/v2/submit` | Submit user (with phone) | name, email, phone |
| GET    | `/api/v2/all`    | Get all users            | none               |

**Example JSON Response (GET /api/v1/all):**

```json
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "created_at": "2026-01-08 14:00:00"
  }
]
```

---

## How It Works

1. **Frontend**: HTML form collects data and sends POST request to `/api/v1/submit` or `/api/v2/submit`.
2. **Route**: Receives request and forwards to Controller.
3. **Controller**: Validates data and calls Model.
4. **Model**: Executes SQL query in MySQL database.
5. **Controller**: Returns JSON response to frontend.
6. **Frontend**: Displays success message or fetches all users via GET API.

---

## License

This project is **open-source** and free to use under the MIT License.
