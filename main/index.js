const express = require('express');
const app = express();
const sequelize = require('../conf/sequelize');
const cors = require('cors');

const Class = require('../models/class');
const Race = require('../models/race');
const Character = require('../models/character');

const charactersRouter = require('../routes/character');
const racesRouter = require('../routes/races');
const classesRouter = require('../routes/classes');

app.use(express.json());

app.use(cors());

app.use('/api/characters', charactersRouter);
app.use('/api/races', racesRouter);
app.use('/api/classes', classesRouter);

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.error('Error syncing database:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
