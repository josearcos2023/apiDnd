const express = require('express');
const router = express.Router();
const Class = require('../models/class');

router.get('/', async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const clase = await Class.findByPk(req.params.id);
    if (!clase){
      return res.status(404).json({ error: 'Class not found' });
    }
    res.json(clase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
