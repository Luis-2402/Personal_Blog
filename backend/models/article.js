const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');

function getAllArticles() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
  const files = fs.readdirSync(dataDir);
  return files.map(file => {
    const content = fs.readFileSync(path.join(dataDir, file));
    return JSON.parse(content);
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getArticleById(id) {
  const filePath = path.join(dataDir, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath);
  return JSON.parse(content);
}

function saveArticle(article) {
  const filePath = path.join(dataDir, `${article.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(article, null, 2));
}

function deleteArticle(id) {
  const filePath = path.join(dataDir, `${id}.json`);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
}

module.exports = {
  getAllArticles,
  getArticleById,
  saveArticle,
  deleteArticle
};
