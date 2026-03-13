import Navbar from "../components/Navbar"

export default function Dashboard(){

return(

<div className="min-h-screen bg-[#0b1220] text-white">

<Navbar/>

<div className="max-w-6xl mx-auto p-10">

<h1 className="text-4xl font-bold text-cyan-400 mb-6">
Developer Dashboard
</h1>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-black/40 p-6 rounded-lg border border-gray-700">
<h2 className="text-xl">API Requests</h2>
<p className="text-gray-400 mt-2">Track your API usage</p>
</div>

<div className="bg-black/40 p-6 rounded-lg border border-gray-700">
<h2 className="text-xl">Saved Collections</h2>
<p className="text-gray-400 mt-2">Manage request collections</p>
</div>

<div className="bg-black/40 p-6 rounded-lg border border-gray-700">
<h2 className="text-xl">GraphQL Playground</h2>
<p className="text-gray-400 mt-2">Test GraphQL APIs</p>
</div>

</div>

</div>

</div>

)

}