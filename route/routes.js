const express=require('express')
const router=express.Router()
const empolyeecontroller=require("../controllers/empolyeecontroller")
const Empolyee=require("../models/Empolyee")

router.post('/add-emp',empolyeecontroller.createEmpolyee)
router.get('./all-employees',empolyeecontroller.getEmpolyee)

module.exports=router
