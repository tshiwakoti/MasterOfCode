var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
	amount: Number,
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	_campaign: {type: mongoose.Schema.ObjectId, ref: 'Campaign'}
})

module.exports = mongoose.model('Transaction', TransactionSchema);
