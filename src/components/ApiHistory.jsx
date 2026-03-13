import { getHistory } from "../utils/apiStorage"

export default function ApiHistory({setUrl,setMethod}){

const history = getHistory()

return(

<div className="bg-black/40 p-4 rounded-lg border border-gray-700">

<h2 className="text-lg mb-3 text-cyan-400">
API History
</h2>

{history.map((item,i)=>(

<div
key={i}
className="text-sm mb-2 cursor-pointer hover:text-cyan-400"
onClick={()=>{
setUrl(item.url)
setMethod(item.method)
}}
>

{item.method} — {item.url}

</div>

))}

</div>

)

}