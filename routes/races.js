const express = require('express');
const router = express.Router();
const Race = require('../models/race');

router.get('/', async (req, res) => {
  try {
    const races = await Race.findAll();
    res.json(races);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const race = await Race.findByPk(req.params.id);
    if (!race) {
      return res.status(404).json({ error: 'Race not found' });
    }
    res.json(race);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
