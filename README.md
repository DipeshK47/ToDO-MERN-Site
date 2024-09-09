# Full Stack Todo MERN Site

## Project Overview
This is a full stack Todo application built using the MERN stack (MongoDB, Express, React, and Node.js). The frontend is built using **React** and **Bootstrap** for styling, while the backend is powered by **Node.js**, **Express**, and **MongoDB** with **Mongoose** for database management.

## Features
- Add, update, delete and get tasks.
- Mark tasks as completed or incomplete.
- User authentication (login and registration).
- Responsive design using Bootstrap.
- Full RESTful API with CRUD operations.

## Technologies Used

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Bootstrap**: CSS framework for responsive design and styling.

### Backend:
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing todo tasks and user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **bcryptjs**: For hashing passwords.
- **JWT (JSON Web Tokens)**: For user authentication.

## Setup Instructions

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository
```bash
git clone https://github.com/DipeshK47/ToDO-MERN-Site
cd todo-mern-site
```

Install Dependencies

Backend (Express & MongoDB):
```
cd backend
npm install
```

Frontend (React & Bootstrap):
```
cd frontend
npm install
```

Environment Variables

Create a .env file in the backend folder and add the following environment variables:
```
Environment Variables

Create a .env file in the backend folder and add the following environment variables:
```

Running the Application

Start MongoDB

Make sure MongoDB is running locally, or use MongoDB Atlas with the connection string added in your .env file.

Backend (Node & Express):

In the backend folder, run:
```
npm start
```

Frontend (React):

In the frontend folder, run:
```
npm start
```

Open http://localhost:3000 to view the frontend in your browser. The backend will run on http://localhost:1000.

API Endpoints

Authentication

	•	POST /api/v1/auth/register - Register a new user.
	•	POST /api/v1/auth/login - Login an existing user.

Todo List

	•	POST /api/v1/list/addtask - Add a new task.
	•	GET /api/v1/list - Get all tasks.
	•	PUT /api/v1/list/:id - Update a task.
	•	DELETE /api/v1/list/:id - Delete a task.

Thanks.
