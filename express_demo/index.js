/*
* 网关：负责接收请求，然后把请求分发到处理逻辑的业务上去
* 根据方法，路径进行分发/
* */

const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

function mw1(options){
  return function(req,res,next){
    console.log('mw1')
    console.log(req.body)
    next()
  }
}

function mw2(req,res,next){
  console.log('mw2')
  next()
}

function mw3(req,res,next){
  console.log('mw3')
  res.end('done')
}

app.use('/',mw1())
app.use('/article',mw2)
app.use(mw3)

//app.use(mw1(),[mw2,mw3])
// function auth(req,res,next){
//   console.log(req.query)
//   if(req.query.username==="hungryyang"){
//     next()
//   }else{
//     next('not pass')
//   }
// }
//
// app.use(auth)
//
// app.use((req,res)=>{
//   res.end('hello author')
// })
//

//错误处理中间件
app.use((err,req,res,next)=>{
  res.end(err)
})

/*
* use 中间件 本身是对请求或流程处理的一种分装 赋值有顺序性
* 调用next会把处理权交给下一个中间件
* next('字符串')会进行错误处
* 如果是next('router')会直接走到下一个router中
*/

// app.use((req,res,next)=>{
//   req.yang = 1
//   console.log(`req.yang2： ${req.yang2}`)
//   next()
// })
//
// app.use((req,res)=>{
//   console.log(`req.yang : ${req.yang}`)
//   req.yang2 = 2
//   res.end('express demo')
// })

const server = http.createServer(app)

server.listen('8888')