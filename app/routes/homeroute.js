const express=require('express')
const router=express.Router()

const homeController=require('../controller/homeController')

router.get('/', homeController.index)
router.get('/about', homeController.about)
router.get('/details', homeController.details)




module.exports=router