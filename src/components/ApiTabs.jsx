export default function ApiTabs({active,setActive}){

const tabs=["Headers","Body","Response"]

return(

<div className="flex gap-6 border-b border-gray-700 mb-4">

{tabs.map(tab=>(

<button
key={tab}
onClick={()=>setActive(tab)}
className={`pb-2 ${
active===tab ? "border-b-2 border-cyan-400 text-cyan-400" : ""
}`}
>

{tab}

</button>

))}

</div>

)

}