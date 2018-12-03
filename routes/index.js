const express = require('express');
const router = express.Router();

// Code de la quête 1 - Récupération paramètre d'URL
router.get('/article-:numeroArticle(\\d+)', (req, res) => {
  console.log(req.params.numeroArticle); // retourne le 3
  res.json({ resultat: `Vous avez demandé l'article ${req.params.numeroArticle}` }); 
});

// Code de la quête 2 - Récupération du GET
router.get('/mon-url', (req, res) => {
  console.log(req.query.maVariableEnGet); // retourne maValeur
  res.json({ resultat: `maVariableEnGet: ${req.query.maVariableEnGet}` });
});

// Code de la quête 3 - Récupération du POST
router.post('/mon-url', (req, res) => {
  console.log(req.body.username); // retourne Bob
  res.json(req.body);
});

module.exports = router;
