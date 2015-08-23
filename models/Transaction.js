var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
	amount: Number,
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	_campaign: {type: mongoose.Schema.ObjectId, ref: 'Campaign'}

});//end transactionSchema

mongoose.model('Transaction', TransactionSchema);