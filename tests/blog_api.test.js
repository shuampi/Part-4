const mongoose = require('mongoose')
const supertest = require('supertest')
const Blog = require('../models/blog')
const app = require("../app")

const api = supertest(app)

const initialBlogs = [
  {
 "title": "data 1 test blog",
  "author": "Pepito",
  "url": "http://lawebpepito.com",
  "likes": 9
},
{
  "title": "data 2 test blog",
   "author": "Menganito",
   "url": "http://lawebMenganito.com",
   "likes": 41
 },
 {
  "title": "data 3 test blog",
   "author": "Fulanito",
   "url": "http://lawebFulanito.com",
   "likes": 41
 },
 {
  "title": "data 4 test blog",
   "author": "Chiquito",
   "url": "http://lawebChiquito.com",
   "likes": 16
 }
]

beforeEach(async () => { 
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[2])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[3])
  await blogObject.save()
 })

test('blogs are return as json', async() =>
{
await api
.get('/api/blogs')
.expect(200)
.expect('Content-Type', /application\/json/)
})

test('all the blogs are return', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(initialBlogs.length)
})

test('a especific blogger author is within returned blog list', async () => {
const response = await api.get('/api/blogs')
const authors = response.body.map(blog => blog.author)
expect(authors).toContain('Pepito')
 })

afterAll(() => {
    mongoose.connection.close()
  })
