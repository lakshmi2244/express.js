const express=require("express")
const app=express()
const cors=require("cors")
const port=4000;
const emp={id:203113,name:"prasanna",gender:"female"}
const students=require("./data.js")

app.use(cors())
app.get("/",(req,res)=>{
	res.send("hi i'm a server")
})

app.get("/user",(req,res)=>{
	res.send("how do you do")
})

app.get("/emp",(req,res)=>{
	res.json(emp)
})

app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server started at port 4000"))