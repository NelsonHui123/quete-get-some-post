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

router.get('/forms-:codeForms(\\d+)', (req, res) => {
  console.log('Code : ', req.params.codeForms);
  console.log('Level : ', req.query.level);
  res.json({ resultat: `Code : ${req.params.codeForms}, level : ${req.query.level}` });
});

router.post('/forms-:codeForms(\\d+)', (req, res) => {
  console.log("Code : ",req.params.codeForms);
  console.log('Level : ', req.query.level);
  console.log('Username : ', req.body.username);
  res.json({ resultat: `Code : ${req.params.codeForms}, Level : ${req.query.level}, Body-username: ${req.body.username}` });
});

router.get('/superMiddleware', (req, res, next) => {
  console.log("Hello middleware");
  next();
}, (req, res, next) => {
    res.send('hello world');
});

module.exports = router;
