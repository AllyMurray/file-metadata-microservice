const cors = require('cors');
const express = require('express');
const app = express();
const fileAnalyseRouter = require('./controllers/fileAnalyse');

app.use(cors());
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.use('/api/fileAnalyse', fileAnalyseRouter);

module.exports = app;
