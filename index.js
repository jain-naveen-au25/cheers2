let express = require('express')
let app = express()
let router=require('./routes')
app.use('/api/',router);

app.get()
let port = 3000
app.listen(port,()=>{
    console.log('app is running')
})