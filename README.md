# MERN Udemy Projects 🚀

This repository contains multiple **MERN stack projects** that I built while learning from Udemy.  
Each subfolder is a separate project with its own backend & frontend.

---

## 📂 Folder Structure  

```  
mern-udemy-projects/
├── Product_Store/
│ ├── backend/
│ │ ├── config/ # Database connection (db.js)
│ │ ├── controllers/ # Controller logic
│ │ ├── models/ # Mongoose models (e.g., Product)
│ │ ├── routes/ # Express routes
│ │ ├── .env # Environment variables
│ │ └── server.js # Express app entry point
│ │
│ └── frontend/
│ ├── public/ # Static assets
│ └── src/ # React source code
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page components (Home, Create, etc.)
│ ├── store/ # Zustand global store
│ ├── App.jsx # Root React component
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
│
└── ChatApp/
├── backend/
│ ├── config/ # MongoDB & environment setup
│ ├── controllers/ # Authentication, chat, and message logic
│ ├── models/ # Mongoose schemas (User, Message, Chat)
│ ├── routes/ # Express routes for auth & chat
│ └── index.js # Backend entry point
│
└── frontend/
├── public/ # Static files
└── src/ # React code
├── components/ # Chat UI, message bubbles, sidebar
├── context/ # Auth & socket contexts
├── pages/ # Login, Register, Chat pages
├── App.jsx # Root component
└── main.jsx # Entry point
```  



##  Project 1: Product Store

A full-stack MERN CRUD application where users can:

- View all products 📦  
- Add a new product ➕  
- Edit product details ✏️  
- Delete a product ❌  

Features
- Zustand for global state management  
- Connected to MongoDB Atlas  
- Clean UI built with TailwindCSS  

Tech Stack
- Frontend: React (Vite), Zustand, TailwindCSS  
- Backend: Node.js, Express, MongoDB (Mongoose)  
- Database: MongoDB Atlas  

---

## Project 2: Chat App

A real-time chat application where users can:

- Register and log in 🔐  
- Send and receive real-time messages 💬  
- View active users online 👥  
- Maintain persistent chat sessions  

Features
- JWT Authentication  
- Socket.io for real-time communication  
- Context API for managing auth & chat state  
- Modular backend with Express and MongoDB  

Tech Stack
- Frontend: React (Vite), TailwindCSS, Context API, Socket.io-client  
- Backend: Node.js, Express, MongoDB (Mongoose), Socket.io  
- Database: MongoDB Atlas  

