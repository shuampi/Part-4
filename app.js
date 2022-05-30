const express = require('express')
const cors = require('cors')
const config = require('./utils/config')
const router = require('./controllers/blogs')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const app = express()

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    
app.use(cors())
//app.use(express.static('build'))
app.use(express.json())

app.use('/api/blogs', router)


module.exports = app