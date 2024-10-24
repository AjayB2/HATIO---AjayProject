const Project = require('../models/Project');

exports.addTodo = async (req, res) => {
  const { projectId, description } = req.body;

  try {
    const project = await Project.findById(projectId);
    const todo = { description };
    project.todos.push(todo);
    await project.save();

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error adding todo' });
  }
};

// Similar controllers for updateTodo, deleteTodo
