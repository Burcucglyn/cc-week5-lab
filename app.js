const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/', (req,res)=>{
    res.send('I just shipped my app to a container!')
})

app.listen(3000)