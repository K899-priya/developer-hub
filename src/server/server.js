import express, { json } from "express"
import cors from "cors"
import { get } from "axios"

const app=express()

app.use(cors())
app.use(json())

app.post("/api-test",async(req,res)=>{

const {url}=req.body

try{

const response=await get(url)

res.json(response.data)

}
catch{

res.status(500).json("API error")

}

})

app.listen(5000,()=>{
console.log("Server running")
})