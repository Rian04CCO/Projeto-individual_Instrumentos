var express = require("express");
var router = express.Router();

var medidaController = require("../controller/medidaController");

router.get("/instrumentos", function (req, res) {
    console.log("Rota /medidas/instrumentos chamada");
    medidaController.buscarInstrumentos(req, res);
});

router.get("/musica", function (req, res) {
    console.log("Rota /medidas/musica chamada");
    medidaController.buscarMusica(req, res);
});
// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;