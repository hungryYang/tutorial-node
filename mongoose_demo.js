const mongoose = require('mongoose')

mongoose.Promise = Promise



const uri = 'mongodb://localhost:27017/test'
const connection = mongoose.connect(uri,{useMongoClient:true})
const db = mongoose.connection

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId //用于Schema定义ObjectId
// Object = mongoose.Types.ObjectId //用于生成新的ObjectId
const UserSchema = new Schema({
  //require选项：生成数据时该字段是必须的 unique选项：运用Mongodb机制使整个数据库中只能存在一条相同的记录
  //index选项：排序顺序
  name:{type:String,required:true, unique:true,index:1},
  age:{type:Number,max:188,min:[0,'too young too naive']}
})

const UserModel = mongoose.model('user',UserSchema)


!async function(params){
  const filter = {}
  if(params.name) filter.name = params.name
  const flow = UserModel.find(filter)
  if(params.projection) flow.select(params.projection)

  if(params.sort) flow.sort(params.sort)

  const users = await flow.exec()

  return users
}({
  name:'yang',
  projection:{age:1},
  sort:'-age'
})
  .then(r=>{
    console.log(r)
  })
  .catch(e=>{
    console.log(e)
  })

db.on('open',()=>{
  console.log('db connected')
})

db.on('error',(e)=>{
  console.log(e)
})