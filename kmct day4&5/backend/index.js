//1.IMPORTING THE EXPRESS
const express = require('express')
const employeeModel=require("./model")
const cors=require('cors')

//2.INITIALISATION
const app=new express()

//middleware || parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());


//3.API CREATION
app.get('/',(req,res)=>{
    res.send("The message from api")
})


//4.TRIAL API
app.get('/trial',(req,res)=>{
    res.send("THE TRIAL MESSAGE")
})

//api for adding data
app.post('/create',async(req,res)=>{
    var result=await new employeeModel(req.body)
    result.save()
    res.send("DATA ADDED")
})

//api for viewing data
app.get('/view',async(req,res)=>{
    var data=await employeeModel.find()
    res.json(data)
    console.log(data)
})

//api for deleting data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("DELETED")
})

//api for updating the data
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("DATA UPDATED")
})


//5.SET THE PORT
app.listen(3005,()=>{
    console.log("Port 3005 is running")
})

//6.POST
app.post('/po',(req,res)=>{
    res.send("THE POST MESSAGE")
})

