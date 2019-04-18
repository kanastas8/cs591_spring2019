const express = require('express');
const router = express.Router();
const request = require("request");


router.get('/movies', function (req,res,next) {

  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=961f63d93324cb5c95005609d7cc5853&language=en-US&page=1'

  const movies_arr = [];
  request(url, {json: true}, function(error, response, body){
    if (error) throw new Error(error);

    for(let i = 0; i < body.results.length; i++){
      let result1 = body.results[i];
      console.log(result1.original_title);
      movies_arr.push(result1.original_title);
      res.json({"movie":result1.original_title, "overview":result1.overview});
    }

    console.log(movies_arr)

  });

});

module.exports = router;
