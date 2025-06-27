import { Todo } from "../models/todo.model.js";


// create
export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body
        // console.log(title);
        const newTodo = await Todo.create({ title, description })
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({mesaage: error.mesaage})
    }
}

// read all
export const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(201).json(todos)
    } catch (error) {
        res.status(400).json({mesaage: error.mesaage})
    }
}


// read one
export const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(201).json(todo)
    } catch (error) {
        res.status(400).json({mesaage: error.mesaage})
    }
}

// update
export const updateTodo = async (req, res) => {
    try {
        const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(updateTodo)
    } catch (error) {
       res.status(400).json({mesaage: error.mesaage}) 
    }
}

// delete
export const deleteTodo = async () => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(201).json({message : 'Todo Deleted'})
    } catch (error) {
        res.status(400).json({mesaage: error.mesaage})
    }
}