import mongoose from 'mongoose'

const todoSchema= new mongoose.schema(
  {
    content:
  {
  type: String,
  required: true,
},
complete:{
  type:boolean,
  default:false
},
createdBy:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
},
subTodos=[
{
  type=mongoose.Schema.Types.ObjectId,
  ref="SubTodo"
}
]//Array of subtodos


},
{timeStamps:true})

export const Todo =mongoose.model('Todo', todoSchema)