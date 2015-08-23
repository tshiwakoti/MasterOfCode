var Campaign = require('../models/Campaign');


// GET /campaign/:id
exports.getCampaign = function(req, res) {
  Campaign.find({_id: req.body.id}).populate('_transactions').exec(function(err, campaign_detail){
  	if(err){
  		console.log(err);
  	}else{
  		Campaign.populate(campaign_detail, {path: '_transactions._user', model:'Campaign'}, function(err, users){
  			console.log('Got users');
  			res.render('campaign/show', campaign_detail);
  		})
  	}
  })
};

// GET /campaigns
exports.allCampaigns = function(req, res) {
	Campaign.find({}, function(err, all_campaigns){
		if(err){
			console.log('Error getting all campaigns');
		}else{
			res.render('campaign/all', all_campaigns);
		}
	})
}

// GET /campaign/new
exports.newCampaign = function(req, res) {
  res.render('campaign/new', {
    title: 'New Campaign'
  })
}

// POST /campaign/create
exports.createCampaign = function(req, res) {
	var new_campaign = new Campaign(req.body);
	 new_campaign.save(function(err, campaign){
	 	if(err){
	 		console.log('Error adding new campaign');
	 	}else{
	 		console.log('Added a new campaign with id ' + campaign._id);
	 		res.redirect('campaign/create/' + campaign._id);
	 	}
	})
}


// GET /campaign/:id/donate
exports.newDonationForm = function(req,res){
	res.render('campaign/donate');
}

// POST /campaign/:id/donate
exports.createDonation = function(req, res) {
	// var Simplify = require("simplify-commerce"),
	// client = Simplify.getClient({
	//     publicKey: 'YOUR_PUBLIC_API_KEY',
	//     privateKey: 'YOUR_PRIVATE_API_KEY'
	// });
	// client.payment.create({
	//     amount : "123123",
	//     description : "payment description",
	//     card : {
	//        expMonth : "11",
	//        expYear : "19",
	//        cvc : "123",
	//        number : "5555555555554444"
	//     },
	//     currency : "USD"
	// }, function(errData, data){
	//     if(errData){
	//         console.error("Error Message: " + errData.data.error.message);
	//         // handle the error
	//         return;
	//     }
	//     console.log("Payment Status: " + data.paymentStatus);
	// });
}
