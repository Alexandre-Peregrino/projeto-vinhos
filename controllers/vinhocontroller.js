const Vinho = require('../model/vinho');
const vinhoModel = new Vinho();
const path = require('path');

class VinhoController{
    // função para retornar todos os vinhos
    getAllVinhos(req, res){
        const vinhos = vinhoModel.getAllVinhos();
        res.json(vinhos);
    }

    createVinho (req, res){
        const {name, description} = req.body;
        const newVinho = vinhoModel.createVinho(name, description);
        res.status(201).redirect('/');
    }
    
    getVinhoById(req,res){
        const vinhoId = req.params.id;
        const vinho = vinhoModel.getVinhoById(vinhoId);
        if(!vinho){
            return res.status(404).json({msg: 'Vinho not found'});
        }
        res.json(vinho);
    }
    deleteVinho (req, res){
        const vinhoId = req.params.id;
        const vinhoDeleted = vinhoModel.deleteVinho(vinhoId);
        if(!vinhoDeleted){
            return res.status(404).json({msg: 'Vinho not found'});
        }
        res.json({msg: 'Vinho deleted sucessfully'});
        
    }
    formEditVinho(req, res){
        res.sendFile(path.join(__dirname, '../public/html', 'edit.html'));
    }

    updateVinho(req, res){
        const vinhoId = req.params.id;
        const {name, description} = req.body;
        const vinhoUpdate = vinhoModel.updateVinho(vinhoId, name, description);
        if(!vinhoUpdate){
            return res.status(404).json({msg: 'Vinho not found'});
        }
        res.json({vinhoUpdate});
    }   
}
module.exports = new VinhoController();