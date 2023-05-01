const { env } = require('process');

const target = env.NODE_ENV === 'production' ? "https://webapibioruta.azurewebsites.net" : "http://localhost:30635";

const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
