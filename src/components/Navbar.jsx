import {Link} from "react-router-dom"
import {FaCode} from "react-icons/fa"

export default function Navbar(){

return(

<nav className="flex justify-between p-4 bg-transparent backdrop-blur-lg border-white/5">

<h1 className="text-xl flex gap-2 items-center">
<FaCode/> Developer Hub
</h1>

<div className="flex gap-6">

<Link to="/">Home</Link>
<Link to="/json">JSON Tool</Link>
<Link to="/api">API Tester</Link>
<Link to="/password">Password</Link>
<Link to="/dashboard">Dashboard</Link>

</div>

</nav>
)
}