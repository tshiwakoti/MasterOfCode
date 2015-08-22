// GET /campaign/:id
exports.getCampaign = function(req, res) {
  res.render('campaign/show', {
    // title: 'Login'
  });
};


// GET /campaigns
exports.allCampaigns = function(req, res) {
  res.render('campaign/all', {
    
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
  
}
