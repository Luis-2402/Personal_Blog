const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const authMiddleware = require('../middleware/auth');

// Páginas públicas
router.get('/', articleController.showHome);
router.get('/article/:id', articleController.showArticle);

// Autenticación (simple)
router.get('/login', articleController.showLogin);
router.post('/login', articleController.handleLogin);
router.get('/logout', articleController.handleLogout);

// Páginas privadas (admin)
router.get('/admin', authMiddleware, articleController.showDashboard);
router.get('/new', authMiddleware, articleController.showNewArticle);
router.post('/new', authMiddleware, articleController.createArticle);
router.get('/edit/:id', authMiddleware, articleController.showEditArticle);
router.post('/edit/:id', authMiddleware, articleController.updateArticle);
router.post('/delete/:id', authMiddleware, articleController.deleteArticle);

module.exports = router;