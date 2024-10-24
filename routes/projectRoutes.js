const express = require('express');
const { createProject, getProjects, getProject, updateProject, deleteProject } = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createProject);
router.get('/', authMiddleware, getProjects);
router.get('/:id', authMiddleware, getProject);
router.put('/:id', authMiddleware, updateProject);
router.delete('/:id', authMiddleware, deleteProject);

module.exports = router;
