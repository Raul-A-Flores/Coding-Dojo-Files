const PlayerController = require('../controllers/Player.controller');
 
module.exports = app => {
    app.get('/api/Players', PlayerController.findAllPlayers);
    app.get('/api/Players/:id', PlayerController.findOneSinglePlayer);
    app.put('/api/Players/:id', PlayerController.updateExistingPlayer);
    app.post('/api/Players', PlayerController.createNewPlayer);
    app.delete('/api/Players/:id', PlayerController.deleteAnExistingPlayer);
}