const {getCharById} = require("../controllers/getCharById");
const {postFav, deleteFav} = require("../controllers/handleFavorites");
const {login} = require("../controllers/login");

// const express = require("express");
// const routes = express.Router();

const router = require("express").Router();


router.get("/character/:id", getCharById); //get("/character/:id", (req,res) =>{  getCharById(req,res)  })
router.get("/login", login);
router.post("/favorites", postFav);
router.delete("/favorites/:id", deleteFav)

module.exports = router;