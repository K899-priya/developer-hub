import { useState } from "react"

export default function ApiTester(){

const [url,setUrl] = useState("")
const [data,setData] = useState(null)

async function testAPI(){

try{

const res = await fetch(url)
const json = await res.json()

setData(json)

}
catch(error){
  console.log(error)
  setData("API Error")
}

}

return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-4">
API Tester
</h1>

<input
className="border p-2 w-full text-black"
placeholder="Enter API URL"
onChange={(e)=>setUrl(e.target.value)}
/>

<button
onClick={testAPI}
className="bg-blue-500 text-white px-4 py-2 mt-4"
>
Test API
</button>

<pre className="mt-6 bg-black p-4 text-green-400 overflow-auto">
{JSON.stringify(data,null,2)}
</pre>

</div>

)

}