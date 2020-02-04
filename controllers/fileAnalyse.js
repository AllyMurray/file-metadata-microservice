const fileAnalyseRouter = require('express').Router();
const multiparty = require('multiparty');

fileAnalyseRouter.post('/', (request, response) => {
  const form = new multiparty.Form();

  form.parse(request, function(error, fields, files) {
    if (error) {
      console.log(error);
      return response.json({ error: 'Invalid upload' });
    }

    const file = files.upfile[0];
    response.json({
      name: file.originalFilename,
      type: file.headers['content-type'],
      size: file.size
    });
  });
});

module.exports = fileAnalyseRouter;
