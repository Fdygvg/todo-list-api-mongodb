import express from "express";

class BookController {
  constructor() {
    this.library = [
      {
        id: 1,
        author: "James Carter",
      },
      {
        id: 2,
        author: "Linda Marlowe",
      },
      {
        id: 3,
        author: "Marcus Gray",
      },
      {
        id: 4,
        author: "Evelyn Brooks",
      },
      {
        id: 5,
        author: "Oliver Trent",
      },
    ];
  }
  getAllBooks =(req, res) =>{
   try {
    res.status(200).json(this.library);
   } catch (error) {
    res.status(400).json({msg: "Error 400"})
   } 
}


createBook=(req, res)=> {
    const { author } = req.body
    const newBook = {
        id: this.library.length + 1,
        author
    }
    this.library.push(newBook)
    res.status(201).json(newBook);
  }
}
export default new BookController();
