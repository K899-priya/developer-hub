import Editor from "@monaco-editor/react"
import { useState } from "react"

export default function GraphQLTester(){

const [query,setQuery] = useState("")
const [endpoint,setEndpoint] = useState("")
const [response,setResponse] = useState("")

async function runQuery(){

const res = await fetch(endpoint,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({query})
})

const data = await res.json()

setResponse(JSON.stringify(data,null,2))

}

return(

<div>

<input
placeholder="GraphQL Endpoint"
value={endpoint}
onChange={(e)=>setEndpoint(e.target.value)}
className="w-full mb-4 bg-black border border-gray-700 px-4 py-2"
/>

<Editor
height="200px"
defaultLanguage="graphql"
theme="vs-dark"
value={query}
onChange={(v)=>setQuery(v||"")}
/>

<button
onClick={runQuery}
className="bg-purple-500 px-6 py-2 mt-4 rounded"
>

Run Query

</button>

<Editor
height="300px"
defaultLanguage="json"
theme="vs-dark"
value={response}
options={{readOnly:true}}
/>

</div>

)

}