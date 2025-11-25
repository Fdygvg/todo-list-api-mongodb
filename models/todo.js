import mongoose from 'mongoose';

// This is your OOP Model Class!
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  desc: {
    type: String,
    maxlength: 500
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Model Class
const todo = mongoose.model('todo', todoSchema);

export default todo;