console.log('the bot is starting');

var Twit = require('twit');
var config = require('./config');

console.log(config);

var T = new Twit(config);

var params = {
    q: 'manchester united', count: 2,
  
}


T.get('search/tweets', params, gotData ); 
function gotData(err, data, response) {
    console.log(data)

    var tweets = data.statuses;
    for (var i=0; i < tweets.length; i++){
        console.log(tweets[i].text);

    tweets = document.getElementById("tweetout");
    tweetout.innerHTML = tweets[i].text;
    }
  }

function tweetIt(){
  var tweet = {
    status: user.input
}

  T.post('statuses/update',tweet, tweeted); 
  function tweeted (err, data, response){
  

    if (err){
        console.log("something went wrong!")
        console.log(err);
    } else{
        console.log("success!");
        console.log(data);
    }
  }
}
   




