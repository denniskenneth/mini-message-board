const express = require('express');
const { indexController, getAddFormController } = require('../controllers/indexCOntroller');

const Router = express.Router();




Router.get('/', indexController);

Router.get('/new', getAddFormController)

Router.post('/new', (req, res) => { })


module.exports = Router;