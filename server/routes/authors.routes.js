const AuthorsController = require('../controllers/authors.controller');


module.exports = (app) => {
    app.get('/api/authors',AuthorsController.index);
    app.post('/api/authors',AuthorsController.create);
    app.get('/api/authors/:id',AuthorsController.show);
    app.put('/api/authors/:id',AuthorsController.update);
    app.delete('/api/authors/:id',AuthorsController.destroy);
}