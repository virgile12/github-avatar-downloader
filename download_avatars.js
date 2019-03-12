var request = require('request');
var request2 = require('./secret');
var fs = require('fs')

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    
    
    var options = {
            url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
            headers: {
              'User-Agent': 'request',
              'Authorization': `token ${request2.GITHUB_TOKEN}`
          }}
        
          request(options, function(err, res, body) {
            cb(err, body);
            
            }

          );


  }


  getRepoContributors("jquery", "jquery", function(err, result) {
      var users = JSON.parse(result);
      for (var user of users) {
          console.log(user.avatar_url);
      }

    });
    function downloadImageByURL(url, filePath) {
        var fs = require('fs');

        request.get(url)
               .on('error', function (err) {                                  
                 throw err; 
               })
               .on('response', function (response) { 
                 console.log('downloading');
                 response.headers['jpeg']
        
                 
               })
               .on('end', function (end) {
                   console.log('nice job downloaded')
               })
               .pipe(fs.createWriteStream(filePath));
      }
      
      
    // console.log("Errors:", err);
    // console.log("Result:", result);
  downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")
