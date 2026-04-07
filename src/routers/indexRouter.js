const express = require('express');
const { indexController, getAddFormController, addMessage, getMessageController } = require('../controllers/indexCOntroller');

const Router = express.Router();




Router.get('/', indexController);

Router.get('/new', getAddFormController)

Router.post('/new', addMessage)

Router.get('/message/:id', getMessageController)


module.exports = Router;