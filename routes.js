let express = require('express')
let router = express.Router()
let {getData,postData}=require('./controllers')
router.route('/').get(getData)
router.route('/').post(postData)

module.exports=router