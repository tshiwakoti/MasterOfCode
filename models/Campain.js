var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var campaignSchema = new mongoose.Schema({
	name: String,
	description: String,
	admin_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	location: String,		//google maps api?
	created_at: {type: Date, default: Date.now}, 	//starting date of the campaign
	exp_date: Date,
	goal: Number, 
	total_amount: Number,
	donators: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	_transactions: [{type: mongoose.Schema.ObjecteId, ref: 'Transaction'}]
})//end campaignSchema