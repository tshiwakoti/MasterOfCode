var Campaign 		= require('../models/Campaign');

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  
  Campaign.find({}).limit(4).exec(function(err, recent_campaigns){
		if(err){
			console.log('Error getting all campaigns');
		}else{
      console.log(recent_campaigns)
			res.render('home', {campaigns: recent_campaigns});
		}
	})
};
