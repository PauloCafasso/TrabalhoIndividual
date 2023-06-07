var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:sexo", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
router.get("/ultimas2/:tipo", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real/:sexo", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/tempo-real2/:tipo", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})

module.exports = router;