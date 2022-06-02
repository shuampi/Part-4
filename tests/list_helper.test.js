const listHelper = require("../utils/list_helper");
const blogsList = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

test("return one", () => {
  const blogs = [];
  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

describe("total likes", () => {
  test("of empty list is zero", () => {
    const blogs = [];
    const result = listHelper.totalLikes([]);
    expect(result).toBe(0);
  });

  test("when there is only one blog in the list return the likes of that blog", () => {
    const blogs = [
      {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0,
      },
    ];
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(10);
  });

  test("a list of blogs likes is equal to the summ of all likes", () => {
    const result = listHelper.totalLikes(blogsList);
    expect(result).toBe(36);
  })
});

describe("most liked blog", () => {
  test("when the blog list is empty return zero", () => {
    const blogs = []
    const result = listHelper.favouriteBlog(blogs)
    expect(result).toBe(0)
  });
  test("when there is only one blog in the list return that blog information", () => {
    const blogs = [
      {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0,
      },
    ]

    const result = listHelper.favouriteBlog(blogs);
    expect(result).toEqual({
      title: "React patterns",
      author: "Michael Chan",
      likes: 7,
    })
  });

  test('when there blog list is greater than one, return information of the most liked blog',() => { 
    const restul = listHelper.favouriteBlog(blogsList)
    const current = {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
  }
    expect(restul).toEqual(current)

   })
});
//helper functions and unit tests step 4 (4.6)
describe('author with the most posted blogs', () => { 

  test('when array is empty return zero', () => { 
    const blogs = []
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual(0)
   })

   test('when in the array there is only one blog return information of that blog', () => { 

    })

    test('when the list of blogs is greater than one, return the author with most posted blogs',() => { 

     })

 });
