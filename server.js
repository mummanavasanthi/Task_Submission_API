const express = require('express');

const app = express();

app.use(express.json());

let tasks = [];

// Home Route
app.get('/', (req, res) => {
    res.send('Task Submission API Running');
});

// Get All Tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Submit Task
app.post('/tasks', (req, res) => {

    const { studentName, taskTitle, status } = req.body;

    const newTask = {
        id: tasks.length + 1,
        studentName,
        taskTitle,
        status
    };

    tasks.push(newTask);

    res.status(201).json({
        message: 'Task Submitted Successfully',
        data: newTask
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});