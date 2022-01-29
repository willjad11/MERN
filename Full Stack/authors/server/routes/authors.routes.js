const AuthorController = require('../controllers/authors.controller');

module.exports = function (app) {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.post('/api/authors', AuthorController.createAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}