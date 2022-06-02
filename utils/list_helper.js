const dummy = (blogs) => {
  return 1
};

const totalLikes = (arrayBlogs) => {
  if (arrayBlogs.length === 0) {
    return 0
  } else if (arrayBlogs.length === 1) {
    return arrayBlogs[0].likes
  } else {
    const arrayLikes = arrayBlogs.map((blog) => {
      return blog.likes
    })
    
    const summOfLikes = arrayLikes.reduce((a, b) => a + b)
    return summOfLikes
  }
};

const favouriteBlog = (blogs) => { 
    if(blogs.length===0){
        return 0
    }
    if(blogs.length===1){
      mostLiked = {
      title : blogs[0].title,
      author : blogs[0].author,
      likes : blogs[0].likes
    }
      return mostLiked
    } else {
      const arrayLikes = blogs.map((blog) => {
        return blog.likes
      })
      const indexMostLikedBlog = arrayLikes.indexOf(Math.max(...arrayLikes))
      const mostLikedBlog = {
        title: blogs[indexMostLikedBlog].title,
        author: blogs[indexMostLikedBlog].author,
        likes: blogs[indexMostLikedBlog].likes
      }
      return mostLikedBlog
    }

 }

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
};
