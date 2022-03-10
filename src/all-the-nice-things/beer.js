const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('dentro do router de /beer' + '\n' + req.melhorEscola);
});

module.exports = router;
