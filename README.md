# MERN Udemy Projects 🚀

This repository contains multiple **MERN stack projects** that I built while learning from Udemy.  
Each subfolder is a separate project with its own backend & frontend.

---

## 📂 Folder Structure
mern-udemy-projects/
│
└── product-store/             # Project 1: Product Store App (CRUD)
    ├── backend/               # Node.js + Express + MongoDB
    │   ├── config/            # Database connection (db.js)
    │   ├── controllers/       # Controller logic
    │   ├── models/            # Mongoose models (e.g., Product)
    │   ├── routes/            # Express routes
    │   ├── .env               # Environment variables
    │   └── server.js          # Express app entry point
    │
    └── frontend/              # React + Vite + Zustand
        ├── public/            # Static assets
        ├── src/               # React source code
        │   ├── components/    # Reusable UI components
        │   ├── pages/         # Pages (Home, Create, etc.)
        │   ├── store/         # Zustand store for global state
        │   ├── App.jsx        # Main app component
        │   ├── main.jsx       # React entry point
        │   └── index.css      # Global styles
        │
        └── index.html         # Vite entry file


A full-stack MERN CRUD application where users can:  
- View all products 📦  
- Add a new product ➕  
- Edit product details ✏️  
- Delete a product ❌  
- Uses Zustand for state management  
- Connected to MongoDB Atlas

### Tech Stack  
- Frontend: React (Vite), Zustand, Tailwind  
- Backend: Node.js, Express, MongoDB (Mongoose)  
- Database: MongoDB Atlas 
