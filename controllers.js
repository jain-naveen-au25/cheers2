exports.getData=(req,res)=>{
    res.send('hello world')
}
exports.postData=(req,res)=>{
    let payload = req.body
    res.json({
        success:true,
        payload
    })
}