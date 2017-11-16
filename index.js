//const url = `Schema://host:port/path?query#hash`
// port 22:ssh 80:http  443:https 27017:mongodb

const http = require('http')
const PORT = 8080

const server = http.createServer()

server.on('request',(req,res)=>{
  const url = req.url

  let resStr=''

  if('/hello'===url){
    resStr = 'world'
  }else if('/bye' === url){
    resStr = 'bye'
  }else{
    resStr = 'welcome'
  }

  res.end(resStr)
}).listen(PORT)
