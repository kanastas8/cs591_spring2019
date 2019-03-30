const express = require('express');
const router = express.Router();
const request = require("request");

const url = 'https://api.themoviedb.org/3/movie/550?api_key=my_key'
router.get('/', function (req,res,next) {


    request(url, {json: true}, function(error, response, body){
        if (error) throw new Error(error);

        console.log(body);
        res.render('hw3', {title: 'Movies update :)', movies: body.original_title, release: body.release_date});

    });


});

module.exports = router;