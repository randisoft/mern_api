const asyncHandler = require('express-async-handler')

const Task = require('../models/taskModel')
const User = require('../models/userModel')

const getTasks = asyncHandler(async(req, res) => {
    const tasks = await Task.find({ user: req.user.id })
    res.status(200).json(tasks)
})

const createTask = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add at text field')
    }

    const task = await Task.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(task)
})


const updateTask = asyncHandler(async(req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    const user = await User.findById(req, res.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (task.user.toString() !== user.id) {
        res.status(401)
        throw new Error('Unauthorized to access tasks')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedTask)
})

const deleteTask = asyncHandler(async(req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    const user = await User.findById(req, res.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (task.user.toString() !== user.id) {
        res.status(401)
        throw new Error('Unauthorized to access tasks')
    }

    await task.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}