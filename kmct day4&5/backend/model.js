const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://hudhafthma08:hudhaa@cluster0.xilq5ga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB CONNECTED")
})
.catch(err=>console.log(err))
let mongoSchema=mongoose.Schema

const EmployeeSchema=new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})

var employeeModel=mongoose.model("employee",EmployeeSchema)
module.exports=employeeModel

