const asyncHandler = require('express-async-handler')

const getTasks = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get tasks' })
})

const createTask = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add at text field')
    }
    res.status(200).json({ message: 'Create a task' })
})

const updateTask = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Updated task ${req.params.id}` })
})

const deleteTask = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Deleted task ${req.params.id}` })
})

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}