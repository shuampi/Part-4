const http = require('http')
const app = require('./app') // this is the actual express application.
const config = require('./utils/config')
const logger = require('./utils/logger')


const server = http.createServer(app)


server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})