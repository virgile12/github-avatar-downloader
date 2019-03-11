var request = require('request');
var request2 = require('./secret');

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
              'Authorization' : `token ${request2.GITHUB_TOKEN}`
          }}
        
          request(options, function(err, res, body) {
            cb(err, body);
          });


  }


  getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });