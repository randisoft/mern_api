const getTasks = (req, res) => {
    res.status(200).json({ message: 'Get tasks' })
}

const createTask = (req, res) => {
    res.status(200).json({ message: 'Create a task' })
}

const updateTask = (req, res) => {
    res.status(200).json({ message: `Updated task ${req.params.id}` })
}

const deleteTask = (req, res) => {
    res.status(200).json({ message: `Deleted task ${req.params.id}` })
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}