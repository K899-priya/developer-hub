import { useState } from "react"
import Navbar from "../components/Navbar"
import Editor from "@monaco-editor/react"
import { FaCopy, FaDownload, FaMagic } from "react-icons/fa"

export default function JsonFormatter(){

const [input,setInput] = useState("")
const [output,setOutput] = useState("")
const [error,setError] = useState("")

function formatJSON(){

try{

const parsed = JSON.parse(input)

setOutput(JSON.stringify(parsed,null,2))
setError("")

}catch{

setError("Invalid JSON format")
setOutput("")

}

}

function minifyJSON(){

try{

const parsed = JSON.parse(input)

setOutput(JSON.stringify(parsed))
setError("")

}catch{

setError("Invalid JSON format")

}

}

function copyOutput(){

navigator.clipboard.writeText(output)

}

function downloadJSON(){

const blob = new Blob([output],{type:"application/json"})
const url = URL.createObjectURL(blob)

const a = document.createElement("a")
a.href = url
a.download = "formatted.json"
a.click()

}

function handleDrop(e){

e.preventDefault()

const file = e.dataTransfer.files[0]

const reader = new FileReader()

reader.onload = (event)=>{

setInput(event.target.result)

}

reader.readAsText(file)

}

return(

<div className="min-h-screen bg-black text-white">

<Navbar/>

<div className="max-w-7xl mx-auto p-10">

<h1 className="text-4xl font-bold text-cyan-400 mb-6">
JSON Formatter
</h1>

<div
onDrop={handleDrop}
onDragOver={(e)=>e.preventDefault()}
className="grid md:grid-cols-2 gap-8"
>

{/* Input Editor */}

<div className="border border-cyan-400/20 rounded-xl overflow-hidden">

<p className="p-3 bg-black text-gray-400">
Input JSON (Drag & Drop supported)
</p>

<Editor
height="400px"
defaultLanguage="json"
theme="vs-dark"
value={input}
onChange={(value)=>setInput(value)}
/>

</div>

{/* Output Editor */}

<div className="border border-purple-300/10 rounded-xl overflow-hidden relative">

<p className="p-3 bg-black text-gray-400">
Formatted JSON
</p>

<button
onClick={copyOutput}
className="absolute right-16 top-3 text-cyan-400"
>
<FaCopy/>
</button>

<button
onClick={downloadJSON}
className="absolute right-6 top-3 text-purple-400"
>
<FaDownload/>
</button>

<Editor
height="400px"
defaultLanguage="json"
theme="vs-dark"
value={output}
options={{readOnly:true}}
/>

</div>

</div>

<div className="flex gap-4 mt-8">

<button
onClick={formatJSON}
className="flex items-center gap-2 bg-cyan-500 px-6 py-3 rounded-lg"
>

<FaMagic/> Format JSON

</button>

<button
onClick={minifyJSON}
className="bg-purple-500 px-6 py-3 rounded-lg"
>

Minify JSON

</button>

</div>

{error && (
<p className="text-red-400 mt-4">{error}</p>
)}

</div>

</div>

)

}