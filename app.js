const { application } = require('express')
const router = require('./controllers/blogs')

app.use('/api/blogs', router)