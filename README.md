```markdown
# 🚀 Todo API with MongoDB

A REST API for managing todos with Node.js, Express, and MongoDB, supporting full CRUD operations.

## ✨ Features

- **CRUD Operations** - Create, read, update, delete todos  
- **MongoDB** - Persistent storage with Mongoose  
- **RESTful API** - Clear endpoints  
- **Validation & Error Handling** - Schema-based checks  
- **Async/Await** - Modern JS with proper error handling  

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Env**: Environment variables  

## 📁 Project Structure

```

src/
├── models/Todo.js           # Schema & model
├── controllers/todoController.js  # Business logic
├── routes/todoRoutes.js     # API routes
├── config/database.js       # MongoDB setup
└── server.js                # Express server

````

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/todos` | Get all todos |
| POST   | `/api/todos/new` | Create a todo |
| PUT    | `/api/todos/update/:id` | Update a todo |
| DELETE | `/api/todos/delete/:id` | Delete a todo |

## 📝 Usage Examples

**Create a Todo**
```bash
POST /api/todos/new
Content-Type: application/json

{
  "title": "Learn MongoDB",
  "desc": "Study Mongoose schemas and models",
  "completed": false
}
````

**Get All Todos**

```bash
GET /api/todos
```

**Update a Todo**

```bash
PUT /api/todos/update/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "completed": true
}
```

**Delete a Todo**

```bash
DELETE /api/todos/delete/507f1f77bcf86cd799439011
```

## ⚙️ Setup

```bash
git clone https://github.com/yourusername/todo-api-mongodb.git
cd todo-api-mongodb
npm install
```

Create `.env`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
```

Start server:

```bash
npm run dev
```

API runs at `http://localhost:5000`

---
