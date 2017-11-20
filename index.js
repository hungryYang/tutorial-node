//const url = `Schema://host:port/path?query#hash`
// port 22:ssh 80:http  443:https 27017:mongodb

//HTTP请求第一部分（第一行） GET/INDEX/HTTP/1.1
//http 方法 GET POST PATCH PUT DELETE OPTIONS HEAD

/*
*HTTP 请求头：第二行到空行之前  
*重要的键值对：
*Content-Type：请求体的类型（编码、格式等）
*Content-Length:请求体的长度
*Accept:能够接受的返回提类型
*Cookie
*/

//http请求体和请求头以一个空行作为分隔符

//HTTP 第三部分：请求提 http-request/response-body

const http = require('http')
const Url = require('url')
const PORT = 8080

const server = http.createServer()

const users = []

server.on('request',(req,res)=>{
  const {url,method} = req
  console.log(url)
  switch(url){
    case '/users':
      if(method === 'GET'){
        res.statusCode = 200
        res.end(JSON.stringify(users))
      }else if(method === 'POST'){
        let reqBodyStr=''
        req.on('data',(data)=>{
          console.log(1)
          reqBodyStr += data.toString()
        })

        req.on('end',()=>{
          const user = JSON.parse(reqBodyStr)
          users.push (user)
          res.statusCode = 200
          res.end(JSON.stringify(users))
        })
      }
    break;
  }

}).listen(PORT)
