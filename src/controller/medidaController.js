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

// function buscarMedidasEmTempoReal(req, res) {

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

module.exports = {
    buscarMusica,
    buscarInstrumentos
}