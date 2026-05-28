# Task Submission REST API

## Project Description

Task Submission REST API is a backend application developed using Node.js and Express.js. This project allows users to submit tasks and retrieve submitted task details using REST API endpoints. The API handles HTTP requests and returns JSON responses.

---

## Features

* Submit New Tasks
* Retrieve Submitted Tasks
* REST API Implementation
* JSON Request & Response Handling
* Beginner-Friendly Backend Project

---

## Technologies Used

* Node.js
* Express.js
* Postman
* VS Code

---

# Project Setup & Installation

## Step 1: Create Project Folder

Create a folder named:

```text
Task_Submission_API
```

Open the folder in VS Code.

---

## Step 2: Initialize Node.js Project

Open terminal and run:

```bash
npm init -y
```

This creates a `package.json` file.

---

## Step 3: Install Express.js

Run:

```bash
npm install express
```

This installs Express.js and creates:

* `node_modules`
* `package-lock.json`

---

## Step 4: Create Server File

Create a file named:

```text
server.js
```

# Running the Project

Run the following command in terminal:

```bash
node server.js
```

### Output

```text
Server running on port 3000
```

This means the backend server is running successfully.

---

# API Endpoints

## Home Route

### Request

```http
GET /
```

### Browser URL

```text
http://localhost:3000
```

### Output

```text
Task Submission API Running
```

---

## Get All Tasks

### Request

```http
GET /tasks
```

### Browser URL

```text
http://localhost:3000/tasks
```

### Initial Output

```json
[]
```

---

## Submit Task

### Request

```http
POST /tasks
```

### URL

```text
http://localhost:3000/tasks
```

### Postman Setup

* Open Postman
* Select `POST`
* Enter URL
* Go to:
  `Body → raw → JSON`

---

# Project Flow

```text
Client (Browser/Postman)
        ↓
Send HTTP Request
        ↓
Express Server Processes Request
        ↓
Task Data Stored
        ↓
Response Returned to Client
---

# How to Run This Project on Another System

## Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

---

## Open Project Folder

```bash
cd Task_Submission_API
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Server

```bash
node server.js
```

---

This project demonstrates the implementation of a REST API using Node.js and Express.js for task submission and task management. It helps beginners understand backend development, REST APIs, JSON handling, and server-client communication.
