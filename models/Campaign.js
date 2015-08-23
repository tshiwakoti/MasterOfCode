var mongoose = require('mongoose');

var campaignSchema = new mongoose.Schema({
	title: String,
	description: String,
	location: String,
	created_at: {type: Date, default: Date.now},
	exp_date: Date,
	goal: Number,
	min: Number,
	total_amount: Number,
	_admin_user: { type: mongoose.Schema.ObjectId, ref: 'User' },
	_transactions: [{type: mongoose.Schema.ObjectId, ref: 'Transaction'}]
})

module.exports = mongoose.model('Campaign', campaignSchema);
