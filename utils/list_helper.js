const dummy = (blogs) => { 

    return 1
 }

 const totalLikes = (arrayBlogs) => { 
    if(arrayBlogs.length===0){
        return 0
    }else if(arrayBlogs.length===1){
        return arrayBlogs[0].likes
    }else{

    }

  }





module.exports = {
    dummy,
    totalLikes
}