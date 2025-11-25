import express from "express";
import todo from "../models/todo.js";

class todoController {
  constructor() {
    /*this.todo = [
  {
    title: "Buy groceries",
    desc: "Pick up milk, eggs, bread, and fruits from the supermarket",
    completed: false,
    createdAt: new Date()
  },
  {
    title: "Schedule dentist appointment",
    desc: "Call the clinic and book a check-up for next week",
    completed: false,
    createdAt: new Date()
  },
  {
    title: "Pay electricity bill",
    desc: "Log in to the utility website and finish the payment",
    completed: true,
    createdAt: new Date()
  },
  {
    title: "Clean the living room",
    desc: "Vacuum the floor and organize the bookshelf",
    completed: false,
    createdAt: new Date()
  },
  {
    title: "Plan weekend outing",
    desc: "Check nearby parks or restaurants and pick a place",
    completed: false,
    createdAt: new Date()
  }
];*/
  }
  viewAllTodo = async (req, res) => {
    try {
      const todos = await todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json({ msg: "Error Fetching Todo" });
    }
  };

  createTodo = async (req, res) => {
    try {
      const { title, desc, completed } = req.body;
      const newtodo = await todo.create({
        title,
        desc,
        completed,
      });

      res.status(201).json(newtodo);
    } catch (error) {
      res.status(400).json({ msg: "Error Creating Todo" });
    }
  };

  deleteTodo = async (req, res) => {
    try {
      const { id } = req.params;

      const deletedTodo = await todo.findByIdAndDelete(id);

      if (!deletedTodo) {
        return res.status(404).json({ msg: "Todo not found" });
      }

      res.status(200).json({ msg: "Todo deleted", deletedTodo });
    } catch (error) {
      res.status(400).json({ msg: "Error deleting todo", error });
    }
  };

  updateTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, desc, completed } = req.body; 

      const updatedTodo = await todo.findByIdAndUpdate(
        id,
        { title, desc, completed },
        { new: true, runValidators: true } 
      );

      if (!updatedTodo) {
        return res.status(404).json({ msg: "Todo not found" });
      }

      res.status(200).json(updatedTodo);
    } catch (error) {
      console.error("Update error:", error);
      res.status(400).json({ msg: "Error updating todo", error });
    }
  }
}

const todocontroller = new todoController();
export default todocontroller;
