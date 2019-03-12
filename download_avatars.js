var repoOwner = process.argv[2]
var repoName = process.argv[3]
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
    }
  }

  request(options, function(err, res, body) {
    var users = JSON.parse(body)
      for (var user of users) {
      cb(user.avatar_url, `./avatars/${user.login}.jpeg`);
      }
    }
  );
}

function downloadImageByURL(url, filePath) {
  var fs = require('fs');

  request.get(url)
    .on('error', function(err) {
      throw err;
    })
    .on('response', function(response) {
      console.log('downloading');
      response.headers['jpeg'];
    })
    .on('end', function(end) {
      console.log('nice job downloaded')
    })
    .pipe(fs.createWriteStream(filePath));
}


// console.log("Errors:", err);
// console.log("Result:", result);
console.log(repoOwner, repoName);
getRepoContributors(repoOwner, repoName, downloadImageByURL)
