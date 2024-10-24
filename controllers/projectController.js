const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  try {
    const project = new Project({ title: req.body.title });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error creating project' });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
};

// Other CRUD operations for Project (getProject, updateProject, deleteProject)
