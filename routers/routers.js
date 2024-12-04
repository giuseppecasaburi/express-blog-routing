const postsArray = require("../dataBlog/dataBlog");
const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
    res.json("Qui leggiamo tutto l'array");
});

// Show
router.get("/:id", (req, res) => {
    res.json("Qui leggiamo un solo elemento dell'array con numero " + req.params.id);
});

// Create
router.post("/", (req, res) => {
    res.json("Qui creiamo un nuovo elemento");
});

// Update
router.put("/:id", (req, res) => {
    res.json("Qui modifichiamo un elemento sovrascrivendolo, con id pari a " + req.params.id);
});

// Delete
router.delete("/:id", (req, res) => {
    res.json("Qui cancelliamo un intero elemento, con id pari a " + req.params.id);
});

module.exports = router;