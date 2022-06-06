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

 };

 const mostBlogs = (blogs) => { 
  if(blogs.length===0){
    return 0
}
if(blogs.length===1){
  authorMostBlogsInfo = {
  author : blogs[0].author,
  blogs: 1
}
return authorMostBlogsInfo
} else{
const authorsArray = blogs.map(blog => blog.author)
//console.log('authorsArray :>> ', authorsArray)

const authorsCount = {}
authorsArray.forEach(author => {
  authorsCount[author] = (authorsCount[author] || 0) + 1
});
//console.log('authorsCount :>> ', authorsCount);

const arrayValuesCounter = Object.values(authorsCount)
const arrayKeysCounter = Object.keys(authorsCount)
const indexAuthor = arrayValuesCounter.indexOf(Math.max(...arrayValuesCounter))

const authorMostBlogsPost = {
  author:arrayKeysCounter[indexAuthor],
  blogs: arrayValuesCounter[indexAuthor]
}
return authorMostBlogsPost

}
  };

const mostLikes = (blogs) => { 
  if(blogs.length===0){
    return 0
}
if(blogs.length===1){
  authorMostLikes = {
  author : blogs[0].author,
  likes: blogs[0].likes
}
return authorMostLikes

 } else {
const authorsLikes = {}
blogs.forEach(blog => authorsLikes[blog.author] = (authorsLikes[blog.author] || 0 ) + blog.likes )
 //console.log('authorsLikes :>> ', authorsLikes);
 const arrayValuesLikes = Object.values(authorsLikes)
 const arrayKeysLikes = Object.keys(authorsLikes)
 const indexAuthor = arrayValuesLikes.indexOf(Math.max(...arrayValuesLikes))

 const authorMostLikes = {
   author: arrayKeysLikes[indexAuthor],
   likes: arrayValuesLikes[indexAuthor]
 }
 return authorMostLikes

}
};
module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
};
