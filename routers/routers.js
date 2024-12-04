const postsArray = require("../dataBlog/dataBlog");
const express = require("express");
const router = express.Router();


// Index
router.get("/", (req, res) => {
    res.json(postsArray);
});


// Show
router.get("/:id", (req, res) => {
    let postReq = null;

    for (let i = 0; i < postsArray.length; i++) {
    
        if (postsArray[i].id === parseInt(req.params.id)) {
            postReq = postsArray[i];
        }
    }
    res.json(postReq);
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