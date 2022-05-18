const AuthorController = require("../controllers/author.controller");


module.exports = app => {
    app.get('/api/Authors', AuthorController.findAllAuthors);
    app.get('/api/Authors/:id', AuthorController.findOneSingleAuthor);
    app.put('/api/Authors/:id', AuthorController.updateExistingAuthor);
    app.post('/api/Authors', AuthorController.createNewAuthor);
    app.delete('/api/Authors/:id', AuthorController.deleteAnExistingAuthor);
}