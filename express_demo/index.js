const http = require('http')
const express = require('express')
const app = express()

//use 中间件 本身是对请求或流程处理的一种分装 赋值有顺序性
//调用next会把处理权交给下一个中间件
app.use((req,res,next)=>{
  req.yang = 1
  console.log(`req.yang2： ${req.yang2}`)
  next()
})

app.use((req,res)=>{
  console.log(`req.yang : ${req.yang}`)
  req.yang2 = 2
  res.end('express demo')
})

const server = http.createServer(app)

server.listen('8888')