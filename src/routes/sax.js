var express = require("express");
var router = express.Router();

var saxController = require("../controllers/saxController");

router.get("/", function (req, res) {
    saxController.testar(req, res);
});

router.get("/listar", function (req, res) {
    saxController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de saxController.js
router.post("/cadastrar", function (req, res) {
    saxController.cadastrar(req, res);
});

// router.post("/autenticar", function (req, res) {
//     saxController.entrar(req, res);
// });

module.exports = router;