'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Alex is here.\n');
});

app.listen(PORT);
console.log(`Server is running on http://${HOST}:${PORT}`)
