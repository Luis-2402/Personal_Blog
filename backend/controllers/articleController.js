const path = require('path');
const articleModel = require('../models/article');

const ADMIN_USER = 'admin';
const ADMIN_PASS = '1234';

module.exports = {
  showHome: (req, res) => {
    const articles = articleModel.getAllArticles();
    res.render('guest/home', { articles });
  },

  showArticle: (req, res) => {
    const article = articleModel.getArticleById(req.params.id);
    if (!article) return res.status(404).send('Artículo no encontrado');
    res.render('guest/article', { article });
  },

  showLogin: (req, res) => {
    res.render('admin/login');
  },

  handleLogin: (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      req.session.isAdmin = true;
      res.redirect('/admin');
    } else {
      res.send('Credenciales inválidas');
    }
  },

  handleLogout: (req, res) => {
    req.session.destroy(() => {
      res.redirect('/');
    });
  },

  showDashboard: (req, res) => {
    const articles = articleModel.getAllArticles();
    res.render('admin/dashboard', { articles });
  },

  showNewArticle: (req, res) => {
    res.render('admin/new');
  },

  createArticle: (req, res) => {
    const { title, date, content } = req.body;
    const id = Date.now().toString();
    articleModel.saveArticle({ id, title, date, content });
    res.redirect('/admin');
  },

  showEditArticle: (req, res) => {
    const article = articleModel.getArticleById(req.params.id);
    if (!article) return res.status(404).send('No encontrado');
    res.render('admin/edit', { article });
  },

  updateArticle: (req, res) => {
    const { title, date, content } = req.body;
    const id = req.params.id;
    articleModel.saveArticle({ id, title, date, content });
    res.redirect('/admin');
  },

  deleteArticle: (req, res) => {
    articleModel.deleteArticle(req.params.id);
    res.redirect('/admin');
  }
};