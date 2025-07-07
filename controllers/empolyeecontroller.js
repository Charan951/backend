const Empolyee=require('../models/Empolyee')

const createEmpolyee=async(req,res)=>{
    try {
        const {name,email,phone,city}=req.body
        const empolyee=new Empolyee({
            name,
            email,
            phone,
            city
        })
        await empolyee.save()
        res.status(201).json(empolyee)
    } catch (error) {
        console.log("there is an error",error)
        res.status(500).json({message:'sever error'})
        
    }
}
const getEmpolyee=async(req,res)=>{
    try {
        const empolyess=await Empolyee.find()
        res.status(200).json(empolyess)
        
    } catch (error) {

        res.status(500).json({message:"there is error"})
        
    }
}

module.exports={createEmpolyee,getEmpolyee}