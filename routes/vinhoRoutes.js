const vinhoController = require('../controllers/vinhoController');
const express = require('express');
const router = express.Router();

router.get('/vinhos',vinhoController.getAllVinhos); //rota para listar todos os vinhos
router.get('/vinhos/:id', vinhoController.getVinhoById); //rota para buscar um vinho
router.post('/vinhos/create', vinhoController.createVinho); //rota post para cadastrar vinho
router.put('/vinhos/:id', vinhoController.updateVinho); //rota para atualizar um vinho
router.delete('/vinhos/:id', vinhoController.deleteVinho); //rota para deletar um vinho
router.get('/vinhos/edit/:id', vinhoController.formEditVinho)//rota para renderizar um formulário de edição

module.exports = router;

