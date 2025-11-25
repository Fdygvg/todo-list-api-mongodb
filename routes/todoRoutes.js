import express from "express";
import todocontroller from "../controller/todoController.js";

class todoRoutesClass {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.get("/", todocontroller.viewAllTodo);
    this.router.post("/new", todocontroller.createTodo);
    this.router.delete("/delete/:id", todocontroller.deleteTodo);
    this.router.put("/update/:id", todocontroller.updateTodo);


  }
  getRouter() {
    return this.router;
  }
}
const todoRoutes = new todoRoutesClass();
export default todoRoutes;
