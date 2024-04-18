const express = require('express')
const router = express.Router();
const taskController = require('../controllers/task')


router.get('/tasks', (req, res) => {
    res.render('tasks')
})

router.post('/tasks', async (req, res) => {
    const {taskNumber, taskParent, taskChild, taskLink, taskDesc} = req.body
    try {
        const newTask = await taskController.newTask(taskNumber, taskParent, taskChild, taskLink, taskDesc);
        res.status(200).json(newTask)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router