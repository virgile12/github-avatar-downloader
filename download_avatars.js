var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    
    

    var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
        request(url, function(err, res, body) {
          cb(err, body);
        });
    var options = {
            url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
            headers: {
              'User-Agent': 'request',
              'Authorization' : 'ec924a92cb68fa2291cf64f64cd5577e322bb9ef'
          }}
        
          request(options, function(err, res, body) {
            cb(err, body);
          });


  }


  getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });