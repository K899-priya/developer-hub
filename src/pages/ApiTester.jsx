import { useState } from "react"
import Navbar from "../components/Navbar"
import Editor from "@monaco-editor/react"
import ApiHistory from "../components/ApiHistory"
import { saveHistory } from "../utils/apiStorage"

export default function ApiTester(){

const [method,setMethod] = useState("GET")
const [url,setUrl] = useState("")
const [headers,setHeaders] = useState("{}")
const [body,setBody] = useState("{}")
const [response,setResponse] = useState("")
const [status,setStatus] = useState("")
const [time,setTime] = useState("")
const [authToken,setAuthToken] = useState("")

async function sendRequest(){

try{

const start = Date.now()

const options = {
method,
headers:{
"Content-Type":"application/json",
...JSON.parse(headers),
Authorization: authToken ? `Bearer ${authToken}` : undefined
}
}

if(method !== "GET"){
options.body = body
}

const res = await fetch(url,options)

const data = await res.json()

const end = Date.now()

setResponse(JSON.stringify(data,null,2))
setStatus(res.status)
setTime(end-start)

saveHistory({url,method})

}catch(err){

console.log(err)
setResponse("Request failed")

}

}

return(

<div className="min-h-screen bg-[#0b1220] text-white">

<Navbar/>

<div className="max-w-7xl mx-auto p-8 grid md:grid-cols-4 gap-6">

{/* API History */}

<div className="col-span-1">

<ApiHistory setUrl={setUrl} setMethod={setMethod}/>

</div>

{/* Main API Tester */}

<div className="col-span-3">

<h1 className="text-3xl font-bold text-cyan-400 mb-6">
API Tester
</h1>

{/* Method + URL */}

<div className="flex gap-4 mb-6">

<select
value={method}
onChange={(e)=>setMethod(e.target.value)}
className="bg-black border border-gray-700 px-4 py-2 rounded"
>

<option>GET</option>
<option>POST</option>
<option>PUT</option>
<option>DELETE</option>

</select>

<input
value={url}
onChange={(e)=>setUrl(e.target.value)}
placeholder="Enter API URL..."
className="flex-1 bg-black border border-gray-700 px-4 py-2 rounded"
/>

<button
onClick={sendRequest}
className="bg-cyan-500 hover:bg-cyan-400 px-6 py-2 rounded font-semibold"
>

Send

</button>

</div>

{/* Auth Token */}

<input
placeholder="Bearer Token (optional)"
value={authToken}
onChange={(e)=>setAuthToken(e.target.value)}
className="w-full mb-6 bg-black border border-gray-700 px-4 py-2 rounded"
/>

{/* Headers + Body */}

<div className="grid md:grid-cols-2 gap-6">

{/* Headers */}

<div>

<p className="text-gray-400 mb-2">
Headers (JSON)
</p>

<Editor
height="200px"
defaultLanguage="json"
theme="vs-dark"
value={headers}
onChange={(v)=>setHeaders(v || "")}
options={{
fontSize:14,
minimap:{enabled:false},
automaticLayout:true
}}
/>

</div>

{/* Body */}

<div>

<p className="text-gray-400 mb-2">
Request Body
</p>

<Editor
height="200px"
defaultLanguage="json"
theme="vs-dark"
value={body}
onChange={(v)=>setBody(v || "")}
options={{
fontSize:14,
minimap:{enabled:false},
automaticLayout:true
}}
/>

</div>

</div>

{/* Response */}

<div className="mt-8">

<div className="flex gap-6 mb-3 text-sm text-gray-400">

<p>Status: {status}</p>

<p>Time: {time} ms</p>

</div>

<Editor
height="400px"
defaultLanguage="json"
theme="vs-dark"
value={response}
options={{
readOnly:true,
fontSize:14,
minimap:{enabled:false},
automaticLayout:true
}}
/>

</div>

</div>

</div>

</div>

)

}