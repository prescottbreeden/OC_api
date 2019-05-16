const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/OC_quotes', { useNewUrlParser: true });
const QuoteSchema = new mongoose.Schema({
  name: { type: String, required: [true, "i dunno who you iz..."] },
  quote: { type: String, required: [true, "quote is supposed to be here"] }
}, {timestamps: true});

module.exports = mongoose.model('Quote', QuoteSchema); 
