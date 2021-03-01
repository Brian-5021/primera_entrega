const express = require('express');
const { archivotxt } = require('./inscripcion');
const app = express()

app.use(express.static(__dirname + archivotxt))

app.listen(3000)