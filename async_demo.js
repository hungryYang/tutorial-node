// const obj = {}

// function dealWithObj (obj){
//   obj.dealt = true
// }

// console.log(obj)

// delWithObj(obj)

// console.log(obj)
/*
//异步解决方案　　用同步的方式写异步
(async ()=>{
  async function dealWithObjAsync(obj){
    return new Promise((resolve) => {

      setTimeout(()=>{
        obj.dealt = true
        resolve()
      },2000)

    })
  }
  const obj = {}
  console.log(obj)
  await dealWithObjAsync(obj)
  console.log(obj)
})()
  .then()
  .catch()
*/

////==============================================================////

/*
//传统回调式写法
function dealWithObj(obj,cb){
  setTimeout(()=>{
    obj.dealt = true
    cb(null,obj)
  },2000)
}

const obj = {}
console.log(obj)

dealWithObj(obj,(err,resolve)=>{
  console.log(obj)
})
*/

////==============================================================////

/*
  //Promise 
  //状态：pendding -> resolved/rejected
const p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log(1)
    resolve('done')
  },2000)
})

console.log(`Promise ${p}`)

p.then((r)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(2)
      resolve(`step 2 done`)
    })
  })
})
.then(r =>{
  console.log(r)
})
.catch(e=>{

})
 */

//============================================================//

/*
  //async await
  //返回一个Promise  无论里面包的是同步方法还是异步方法
  //await作用域一定在async内部
*/

/*
async function foo(){
  //await 做的事情实际上就是把Promise用then方法获取到的值直接赋给左面
  const r = await bar()
  console.log(r)
}

function bar(){
  return new Promise ((res,rej)=>{
    res('bar')
  })
}

foo()
*/

/*
把callback函数风格　变成Promise
*/

function foo(params,cb){
  setTimeout(()=>{
    cb(null,'done')
  },1000)
}

function asyncFoo(params){
  return new Promise((res,rej)=>{
    foo(params,(err,result)=>{
      if(err) rej(err)
      else res(result)
    })
  })
}
(async ()=>{
  foo({},(err,result)=>{
    console.log(err)
    console.log(result)
  })

  const result = asyncFoo({})
  console.log(result)
})()
  .then(r=>{

  })
  .catch(e=>{

  })

//Promise/A+