// const connect = require('../../database/connect');
// const Produto = require('../models/Produto');
// const sequelize = require('sequelize');


(async () => {
    //cria a conexão com o banco de dados 
    const database = require('../../database/connect');

    //invoca as classes que vão criar as tabelas
    const Produto = require('../models/Produto');
 
    //codicional: verdade: gera as tabelas apatir dos models com a função sync
    //            false: retorna o erro
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    const novoProduto = await Produto.create({
        nome: 'torsilax',
        preço: 10,
        descricao: 'é um medicamento indicado para o tratamento de reumatismo (conjunto de doenças que pode afetar as articulações, músculos e esqueleto, caracterizado por dor, restrição de movimento e eventual presença de sinais inflamatórios)'

    })

    const produtos = await Produto.findAll();
    console.log(produtos);
    
    
    const produto = await Produto.findByPk(2);
    produto.nome = "infralax";
    const salvarProduto = await produto.save();
    console.log(salvarProduto) 

    Produto.destroy({ where: { id: 1 }})

})();



