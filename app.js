const express = require('express');
const racesRoutes = require('./routes/routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', racesRoutes);

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
