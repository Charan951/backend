const mongoose=require('mongoose')
const empolyeeSchema=new mongoose.Schema({
    //name ,email,ph,city
    name:{
        type:String,
        required:true
    },
      email:{
        type:String,
        required:true
    },
      phone:{
        type:Number,
        default:false
    },
    city:{
        type:String,
    }
})

module.exports=mongoose.model('Empolyee',empolyeeSchema)