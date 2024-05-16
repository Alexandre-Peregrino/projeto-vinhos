let chave = 1;
class Vinho {
    //construtor da classe 
    constructor(){
        this.vinhos = []; //banco de vinhos em forma de vetor
    }
    //Retorna todos os vinhos
    getAllVinhos(){
        return this.vinhos;
    }
    //criar um vinho
    createVinho(name, description){
        const id = `c${chave++}`; //Simulando um id único
        const newVinho = {id, name, description};
        this.vinhos.push(newVinho);
        return newVinho;
    }
    //buscar um vinho 
    getVinhoById(id){
        const vinhoResult = this.vinhos.find(vinho => vinho.id === id); // busca um vinho a partir do id
        return vinhoResult;
    }
    //Função deletar - precisamos de um id
    deleteVinho(id){
        const vinhoIndex = this.vinhos.findIndex(vinho => vinho.id === id);
        if(vinhoIndex !== -1){
            this.vinhos.splice(vinhoIndex, 1);
            return true;
        }
        return false;
    }
    //Função atualizar registros
    updateVinho(id, name, description){
        const vinhoIndex = this.vinhos.findIndex(vinho => vinho.id === id);
        if(vinhoIndex !== -1){
            this.vinhos[vinhoIndex].name = name;
            this.vinhos[vinhoIndex].description = description;
            return this.vinhos[vinhoIndex];
        }
        return null;
    }
}
module.exports = Vinho;