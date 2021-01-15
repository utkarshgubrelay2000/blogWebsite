var express = require('express');
var router = express.Router();
var blogController=require('../controller/blogController')
/* GET home page. */
router.post('/postBlog',blogController.postBlog,err=>{
  console.log('error while signup user')
})
router.put('/editBlog/:id',blogController.editBlog,err=>{
  console.log('error while signup user')
})

router.delete('/deleteBlog/:id',blogController.deleteBlog,err=>{
    console.log('error while signup user')
  })
  router.get('/getAllBlog',blogController.getAllBlog)
  router.get('/getBlogById/:id',blogController.getBlogById)
module.exports=router