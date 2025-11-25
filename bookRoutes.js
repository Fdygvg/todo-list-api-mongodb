import express from "express";
import BookController from "../controllers/bookController.js";


class bookRoutesClass {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.get("/", BookController.getAllBooks);

    this.router.post("/new", BookController.createBook);
  }
  getRouter() {
    return this.router;
  }
}
const bookRoutes = new bookRoutesClass();
export default bookRoutes;