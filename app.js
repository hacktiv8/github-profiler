// TODO: [x] Connect to GitHub API
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

// TODO: [x] Read the data
let request = https.request(options, (response) => {
  let body = ''
  response.on('data', (data) => {
    body = body + data
  })
  response.on('end', () => {
    // TODO: [x] Parse the data
    // Convert String to JSON (JavaScript object)
    let profile = JSON.parse(body)
    console.log(profile.avatar_url)
  })

  // TODO: Print the data out
})

request.end()

request.on('error', (e) => {
  console.error(e)
})
