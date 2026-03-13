import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Bar } from "react-chartjs-2"
import { getToolStats } from "../utils/toolTracker"
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js"

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
)

export default function Dashboard(){

const [stats,setStats] = useState({})
const [repos,setRepos] = useState([])

useEffect(()=>{

const statsData = getToolStats();
// eslint-disable-next-line react-hooks/set-state-in-effect
setStats(statsData);

fetch("https://api.github.com/users/K899-priya/repos")
.then(res=>res.json())
.then(data=>setRepos(data.slice(0,5)))

},[])

const data = {
labels:Object.keys(stats),
datasets:[
{
label:"Tool Usage",
data:Object.values(stats),
backgroundColor:"#06b6d4"
}
]
}

return(

<div className="min-h-screen bg-[#0b1220] text-white">

<Navbar/>

<div className="max-w-7xl mx-auto p-10">

<h1 className="text-4xl font-bold text-cyan-400 mb-8">
Developer Dashboard
</h1>

{/* Tool Usage Chart */}

<div className="bg-black/40 p-6 rounded-lg border border-gray-700 mb-8">

<h2 className="text-xl mb-4">
Tool Usage Stats
</h2>

<Bar data={data}/>

</div>

{/* Saved Tools */}

<div className="grid md:grid-cols-3 gap-6 mb-8">

<div className="bg-black/40 p-6 rounded-lg border border-gray-700">
<h3 className="text-lg">JSON Formatter</h3>
<p className="text-gray-400">Beautify JSON data</p>
</div>

<div className="bg-black/40 p-6 rounded-lg border border-gray-700">
<h3 className="text-lg">API Tester</h3>
<p className="text-gray-400">Test REST APIs</p>
</div>

<div className="bg-black/40 p-6 rounded-lg border border-gray-700">
<h3 className="text-lg">Password Generator</h3>
<p className="text-gray-400">Generate secure passwords</p>
</div>

</div>

{/* GitHub Activity */}

<div className="bg-black/40 p-6 rounded-lg border border-gray-700">

<h2 className="text-xl mb-4">
GitHub Activity
</h2>

{repos.map(repo=>(

<div
key={repo.id}
className="border-b border-gray-700 py-2"
>

<p className="text-cyan-400">
{repo.name}
</p>

<p className="text-gray-400 text-sm">
⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
</p>

</div>

))}

</div>

</div>

</div>

)

}