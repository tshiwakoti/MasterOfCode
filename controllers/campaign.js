var mongoose = require('mongoose');
var Campaign = mongoose.model('Campaign');

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


