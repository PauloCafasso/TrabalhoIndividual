var saxModel = require("../models/saxModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo dashboard.html cadastroSax()
    var tipo= req.body.tipoServer;
    var apelido = req.body.apelidoServer;
    var anoFabricacao = req.body.anoFabricacaoServer;
    var marca = req.body.marcaServer;

    // Faça as validações dos valores
    if (tipo == undefined) {
        res.status(400).send("tipo está undefined!");
    } else if (apelido == undefined) {
        res.status(400).send("Seu apelido está undefined!");
    } else if (anoFabricacao == undefined) {
        res.status(400).send("Seu ano de fabricacao está undefined!");
    } else if (marca == undefined) {
        res.status(400).send("Sua marca está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo saxModel.js
        saxModel.cadastrar(tipo, apelido, anoFabricacao, marca)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listar,
    testar
}