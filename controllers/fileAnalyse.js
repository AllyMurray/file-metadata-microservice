const fileAnalyseRouter = require('express').Router();

fileAnalyseRouter.get('/', (request, response) => {
  response.json({});
});

module.exports = fileAnalyseRouter;
