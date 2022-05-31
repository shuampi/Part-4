const dummy = (blogs) => { 

    return 1
 }

 const totalLikes = (arrayBlogs) => { 
     if(arrayBlogs.length!==0){
    const likesArray = arrayBlogs.map((blogList) => { blogList.likes })
    const sum = likesArray.reduce((previus, current) => { previus + current })}

    return arrayBlogs.length===0? 0: sum

  }





module.exports = {
    dummy,
    totalLikes
}