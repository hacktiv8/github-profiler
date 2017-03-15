// Problem: We need a simple to look at GitHub profile
// Solution: Use NodeJS to connect to GitHub API to
// get profile info and print out to the console

// TODO: Connect to GitHub API
let https = require('https')

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/users/yofri',
  method: 'GET',
  headers: {
    'user-agent': 'nodejs'
  }
}

let request = https.request(options, (result) => {
  console.log('Got response: ', result.statusCode)
})

request.end()

request.on('error', (e) => {
  console.error(e)
})

// TODO: Read the data
// TODO: Parse the data
// TODO: Print the data out
