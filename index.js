let express = require('express')
let app = express()

let mongoose = require('mongoose')
// let productroute = require('./route/productroute')
let cors = require('cors')
const userroute = require('./routes/userroute')
let {errorhandler} = require('./middleware/errormiddleware')
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/regplatform').then(()=>{
    console.log('mongo connected')    
    }).catch((err)=>{
    
    
        console.log(err)         
    process.exit(1)

 })
 app.use(express.json()) 
 app.use('/api/user', userroute)
 app.use(errorhandler)
app.get('/',(req,res)=>{
     res.send('hello')
})

app.listen(3200,console.log('server on'))