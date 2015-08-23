var Simplify 		= require('simplify-commerce'),
		Campaign 		= require('../models/Campaign'),
		Transaction = require('../models/Transaction'),
		secrets 		= require('../config/secrets.js')


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
	 		res.redirect('campaign/' + campaign._id);
	 	}
	 })
}


// GET /campaign/:campaign_id/donate
exports.newDonationForm = function(req,res){
	Campaign.findOne({ 
		_id: req.params.campaign_id 
	}, function(err, result) {
		if (err) return console.error(err);
		console.log(result)
		res.render('campaign/donate', { campaign: result });
	})

}

// POST /campaign/:id/donate
exports.createDonation = function(req, res) {
	console.log(req.params)
	var donation = req.body
	var splitDate = donation.expiry.split(' / ')
	console.log(req.body)

	client = Simplify.getClient({
    publicKey: secrets.simplify.public_key,
    privateKey: secrets.simplify.private_key
	});


	client.payment.create({
    amount : donation.amount,
    description : "payment description",
    card : {
       expMonth : splitDate[0],
       expYear : splitDate[1],
       cvc : donation.cvc,
       number : donation.number.split(' ').join('')
    },
    currency : "USD"
	}, function(errData, data){
    if(errData){
      console.error("Error Message: " + errData.data.error.message);
      return;
    } else {

	    console.log("Payment Status: " + data.paymentStatus);
    }
	});
}
