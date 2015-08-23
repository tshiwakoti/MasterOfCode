var mongoose = require('mongoose');
var Transaction = mongoose.model('Transaction');
var Campaign = mongoose.model('Campaign');

module.exports = (function() {
	return{
		newTransaction: function(req, res) {
			//req.body will contain user that's donating, donation amount, campaign id

			User.findOne({_id: req.body.userId}, function(err, currentUser){
				if (err)
					console.log("didn't get the current user from database");
				else {
					console.log("okay got the current user from database");

					Campaign.findOne({_id: req.body.campaingId}, function(err, campaign) {
						if (err)
							console.log("didn't get this campaign");
						else {
							console.log("okay got the current campaign from database");
							var transaction = new Transaction ({
								amount: req.body.amount,
								_user: currentUser, 
								_campaign: 
							});//new Transaction

							transaction.save(function(err, transaction) {
								if (err)
									console.log("couldn't save the transaction");
								else {
									res.render('campaign/' + req.body.campaingId);
								}
							});//save the transaction
						}//else
					});//find campaign
				}//user else
			})//find user
		}, //new transaction

		showTransactions: function(req, res) {
			Transaction.find({}, function(err, transactions) {
				if (err)
					console.log("couldn't get transactions from database");
				else {
					console.log("got all the transactions");
					res.json(transactions);
				}
			})
		},//show transactions


	}//return
})();//end module exports
