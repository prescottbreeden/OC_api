const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/quotes', controllers.getAllQuotes)
    .get('/api/quotes/:id', controllers.getOneQuote)
    .post('/api/quotes', controllers.createQuote)
    .put('/api/quotes/:id', controllers.updateQuote)
    .delete('/api/quotes/:id', controllers.deleteQuote);
};
