import express from "express";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";
const app = express();
const port = process.env.PORT;
//MONGO DB
connectDB();
app.use(express.json())
app.use("/api/todo", todoRoutes.getRouter());

app.listen(port, () => {
  console.log(`Server Is Running On Port ${port}💯`);
});
