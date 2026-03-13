import { useState, useEffect } from "react"

const lines = [
"> Initializing Developer Hub...",
"> Loading tools...",
"> Connecting APIs...",
"> Ready."
]

export default function Terminal(){

const [text,setText] = useState("")
const [index,setIndex] = useState(0)

useEffect(()=>{

if(index < lines.length){

const timer = setTimeout(()=>{
setText(prev => prev + "\n" + lines[index])
setIndex(index + 1)
},800)

return () => clearTimeout(timer)

}

},[index])

return(

<pre className="bg-black/70 border border-cyan-400 p-6 rounded-lg text-green-400 text-sm mt-8 w-125 max-w-full">

{text}

</pre>

)

}