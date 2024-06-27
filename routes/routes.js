const express = require('express');
const racesData = require('../data/races');
const charactersData = require('../data/characters');

const router = express.Router();

router.get('/races', (req, res) => {
    res.json(racesData);
});

router.get('/races/:name', (req, res) => {
    const race = racesData.find(r => r.name.toLowerCase() === req.params.name.toLowerCase());
    if (race) {
        res.json(race);
    } else {
        res.status(404).send('Race not found');
    }
});

router.get('/characters', (req, res) => {
    res.json(charactersData);
});

router.get('/characters/:name', (req, res) => {
    const character = charactersData.find(c => c.name.toLowerCase() === req.params.name.toLowerCase());
    if (character) {
        res.json(character);
    } else {
        res.status(404).send('Character not found');
    }
});

router.get('/classes', (req, res) => {
    res.json(classesData);
});

router.get('/classes/:name', (req, res) => {
    const classItem = classesData.find(c => c.name.toLowerCase() === req.params.name.toLowerCase());
    if (classItem) {
        res.json(classItem);
    } else {
        res.status(404).send('Class not found');
    }
});

module.exports = router;
