const Quote = require('./models');

module.exports = {

  getOneQuote: (req, res) => {
    const ID = req.params.id;
    Quote.find({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getAllQuotes: (req, res) => {
    Quote.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createQuote: (req, res) => {
    const formData = req.body;
    Quote.create(formData)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateQuote: (req, res) => {
    const ID = req.params.id;
    const data = req.body;
    Quote.findOneAndUpdate({_id: ID}, data, {runValidators: true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteQuote: (req, res) => {
    const ID = req.params.id;
    Quote.findOneAndDelete({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }

}