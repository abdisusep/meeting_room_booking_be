require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const mainRoutes = require('./routes'); 

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.use('/api', mainRoutes);

app.get('/', async (req, res) => {
    res.send('ExpressJS');
});

app.listen(port, () => {
    console.log(`Running on port:${port}`);
});