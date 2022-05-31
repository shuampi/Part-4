const dummy = (blogs) => { 

    return 1
 }

 const totalLikes = (arrayBlogs) => { 
    if(arrayBlogs.length===0){
        return 0
    }else if(arrayBlogs.length===1){
        return arrayBlogs[0].likes
    }else{
const arrayLikes = arrayBlogs.map((blog) => { return blog.likes })
console.log('arrayLikes', arrayLikes)
const summOfLikes = arrayLikes.reduce((a,b) => a + b)
return summOfLikes
    }

  }





module.exports = {
    dummy,
    totalLikes
}