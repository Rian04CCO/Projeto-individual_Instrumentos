var medidaModel = require("../models/medidaModel");

function buscarInstrumentos(req, res) {
    console.log("Controller: buscarInstrumentos()");

    medidaModel.buscarInstrumentos()
        .then(function (resultado) {
            console.log("Resultado da busca:", resultado);

            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum instrumento encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Erro no buscarInstrumentos:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarMusica(req, res) {
    console.log("Controller: buscarMusica()");

    medidaModel.buscarMusica()
        .then(function (resultado) {
            console.log("Resultado da busca:", resultado);

            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma musica encontrada!");
            }
        })
        .catch(function (erro) {
            console.log("Erro no buscarMusica:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


function mostrarKpis(req, res) {
    console.log("Controller: moistrarKpis()");

    medidaModel.mostrarKpis()
        .then(function (resultado) {
            console.log("Resultado da busca:", resultado);

            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma quantidade encontrada!");
            }
        })
        .catch(function (erro) {
            console.log("Erro no mostrarKpis:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    buscarMusica,
    buscarInstrumentos,
    mostrarKpis
}