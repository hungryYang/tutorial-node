/*
错误处理：尽量让错误能够有迹可循，在合适的时候知道是哪出的错，知道其上下文环境是怎么样的。并且把错误正确的记录下来
*/

//throw new Error('something wrong')

/*
V8创建方法
在 targetObject 上创建一个 .stack 属性，当访问时返回一个表示代码中调用 Error.captureStackTrace() 的位置的字符串。
需要在某一个已有的对象上挂载一个现在的调用栈就直接用Error.captureStackTrace就可以看出调用栈
*/

// const obj = {
//   message:'something wrong'
// }

// Error.captureStackTrace(obj)
// throw obj


// try{
//   throw new Error('no')
// }catch(e){
//   console.log(e)
// }

/*
处理异步回调中的错误
1. 不能直接在函数中throw　可能导致调用直接失败　　也可能无法直接找到结果
2. 错误处理不显示
*/

// function foo(params,cb){
//   const err = new Error('somthing wrong async')
//   if(err) cb(error)
// }

// foo({},(err,result)=>{

// })

/*
异步可以直接上手 async/await

async 内部可以用try-catch
*/

// async function foo(){
//    await bar()
//     .catch(e=>{
//       console.log('bar caught err')
//       //想要继续向下进行错误处理
//       throw e
//     })
// }

// async function bar(){
//   throw new Error('async function bar got wrong')
// }

// foo()
//   .catch(e=>{
//     //拿到错误栈
//     console.log(e.stack)
//   })


/*
let it crush

发生未预知错误就崩掉系统
*/

process.on('uncaughtException',(p1,p2)=>{
  console.log(p1)
  console.log(p2)
})

process.on('unhandledRejection',(reason,p)=>{
  console.log(p)
  console.log(reason)
  //process.exit(1)
})

async function foo(){
  throw new Error('aaaa')
}

foo()