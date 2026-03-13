import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Editor from "@monaco-editor/react"
import { trackTool } from "../utils/toolTracker"
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

useEffect(()=>{
trackTool("JSON Formatter")
},[])

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

<div className="min-h-screen bg-[#0b1220] text-white">

<Navbar/>

<div className="max-w-7xl mx-auto px-6 py-10">

{/* Page Header */}

<div className="mb-8">
<h1 className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
JSON Formatter
</h1>

<p className="text-gray-400 mt-2">
Format, validate, and beautify JSON instantly.
</p>
</div>

{/* Editors */}

<div
onDrop={handleDrop}
onDragOver={(e)=>e.preventDefault()}
className="grid md:grid-cols-2 gap-6"
>

{/* Input Editor */}

<div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur">

<div className="flex justify-between items-center px-4 py-2 bg-black/40 border-b border-white/10">
<p className="text-sm text-gray-300">
Input JSON (Drag & Drop supported)
</p>
</div>

<Editor
height="420px"
defaultLanguage="json"
theme="vs-dark"
value={input}
onChange={(value)=>setInput(value || "")}
options={{
fontSize:14,
minimap:{enabled:false},
automaticLayout:true
}}
/>

</div>

{/* Output Editor */}

<div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur relative">

<div className="flex justify-between items-center px-4 py-2 bg-black/40 border-b border-white/10">

<p className="text-sm text-gray-300">
Formatted JSON
</p>

<div className="flex gap-3">

<button
onClick={copyOutput}
className="text-cyan-400 hover:text-white"
>
<FaCopy/>
</button>

<button
onClick={downloadJSON}
className="text-purple-400 hover:text-white"
>
<FaDownload/>
</button>

</div>

</div>

<Editor
height="420px"
defaultLanguage="json"
theme="vs-dark"
value={output}
options={{
readOnly:true,
fontSize:14,
minimap:{enabled:false}
}}
/>

</div>

</div>

{/* Buttons */}

<div className="flex gap-4 mt-8">

<button
onClick={formatJSON}
className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold transition"
>

<FaMagic/>
Format JSON

</button>

<button
onClick={minifyJSON}
className="bg-purple-500 hover:bg-purple-400 px-6 py-3 rounded-lg font-semibold transition"
>

Minify JSON

</button>

</div>

{/* Error Message */}

{error && (
<p className="text-red-400 mt-4">
{error}
</p>
)}

</div>

</div>

)

}