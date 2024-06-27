const express = require('express');
const router = express.Router();
const Character = require('../models/character');

router.get('/', async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(201).json(character);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.json(character);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    await character.update(req.body);
    res.json(character);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    await character.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
