(async ()=>{
    const connect = require('../../database/connect');
    const Produto = require('../models/Produto')
    const Fabricante = require('../models/Fabricante')

    // try {
        
    //     Produto.belongsTo(Fabricante, {
    //         constraint:true,
    //         foreignKey: 'idFabricante'
    //     })

    //     const resultado = await connect.sync({force: true})
    // } catch (error) {
    //     console.log(error)
    // }

    // const novoFabricante = await Fabricante.create({
    //     nome: 'IMS'
    // })
     const novoFabricante2 = await Fabricante.create({
         nome: 'jonhsson'
     })

    const novoProduto = await Produto.create({
        nome: 'vic',
        preço: '110',
        descricao: 'medicamento para respiração',
        idFabricante: novoFabricante2
    })

    const fabricantes = await Fabricante.findAll()
    console.log(fabricantes)
    
    const produtos = await Produto.findAll();
    console.log(produtos);
})();