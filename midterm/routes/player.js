var express = require('express');
var router = express.Router();
//Joel Appoh
//lets get the home page
let Player = require('../models/player');
router.get('/player', function(req, res, next)
{
    Player.find(function(err, player)
    {
        //if we get an error
        if(err)
        {
            console.log(err);
            res.end(err);
            return;
        }
        res.render('player',
        {
            title: 'Players'
        });
    });
});


module.exports = router;