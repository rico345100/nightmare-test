"use strict";
const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/complete', (req, res) => res.sendFile(__dirname + '/complete.html'));
app.listen(3000);