/*
1. 从mongodb中取出某个用户信息
2.　根据用户的年龄决定一下流程
2-1. 年龄小于１８岁，进入防沉迷系统
2-2.　年龄大于18岁，查看是否为真实身份证
3. 根据用户的信息查询是否　在游戏中达到一定等级，如果达到显示不同界面,和防沉迷系统　结果进行比对
4.　根据以上结构，进入游戏
*/

/*
回调地狱
回调过多导致写法难看
回调方法无法确定代码执行的顺序
当需要在流程中做一些通用控制时比较麻烦
*/

// function getUserInfoFromDB(userId,callback){
//   const user ={age:0}
//   user.age = 18+ (Math.random()*3-1.5)

//   setTimeout(()=>{
//     callback(null,user)
//   },1000)
// }

// const MAX_USER_ADDCTION_CONTROL_AGE = 18

// function isIdentityCardValid(user,cb){
//   setTimeout(()=>{
//     callback(null,true)
//   },1000)
// }

// function enterAddictionControlSys(user,cb){
//   setTimeout(()=>{
//     callback(null,true)
//   },100)
// }

// function getLevelInfo(user,cb){}

// console.log(1)
// getUserInfoFromDB('userID1',(err,user)=>{
//   let levelOver20 = false
//   let enteredACS = false
//   if(err){
//     console.log('error getting user',err)
//     return 
//   }
//   console.log(2)
//   if(user.age > MAX_USER_ADDCTION_CONTROL_AGE){
//     isIdentityCardValid(user,(err,valid)=>{
//       console.log(3)
//       if(valid){
//         console.log('done')
//       }else{
//         enterAddictionControlSys(user,(err,result)=>{
//           levelOver20 = true
//           if(levelOver20 && enteredACS){
//             console.log('done')
//           }
//                 console.log(4)
//           console.log('invalid id , enter ACS')
//         })
//       }
//     })
//   }else{
//     enterAddictionControlSys(user,(err,result)=>{
//       console.log('age under 18 , enter ACS')
//     })
//   }

//   getLevelInfo(user,(err,level)=>{
//     letOver20 = level > 20
//     if(levelOver20 && enteredACS){
//       console.log('done')
//     }
//   })
// })


/* 
  Promise 解决方式
 */

// async function getUserInfoFromDB(userId,callback){
//   const user ={age:0}
//   user.age = 18+ (Math.random()*3-1.5)

//   setTimeout(()=>{
//     callback(null,user)
//   },1000)
// }

// const MAX_USER_ADDCTION_CONTROL_AGE = 18

// async function isIdentityCardValid(user,cb){
//   setTimeout(()=>{
//     callback(null,true)
//   },1000)
// }

// async function enterAddictionControlSys(user,cb){
//   setTimeout(()=>{
//     callback(null,true)
//   },100)
// }

// async function getLevelInfo(user,cb){}

// (async ()=>{
//   const user = await getUserInfoFromDB('userId2')
//   let idValid = false
//   let enterACSPromise

//   if(user.age>18){
//     idValid = await isIdentityCardValid(user)
//     if(!idValid){
//       enterACSPromise = enterAddictionControlSys()
//     }
//   }else{
//     enterACSPromise = enterAddictionControlSys()
//   }
//   const levelInfoPromise = getLevelInfo()

//   const results = Promise.all([enterACSPromise,levelInfoPromise])

//   if(results[0] && results[1]>20){
//     console.log('done')
//   }else{
//     console.log('not')
//   }
// })()

/*
async 函数里有一个语句用了await　可以认为，当这个await右边的Promise执行完成之前是不会在运行下面任何一行代码的
*/

async function foo(){
  console.log(1)
  const result = await new Promise((res,rej)=>{
    console.log(2)
    setTimeout(()=>{
      console.log(3)
      res(true)
      console.log('4')
    },1000)
    console.log('aaa')
  })
  console.log('5')
}

foo()
//bluebirdjs