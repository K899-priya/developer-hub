import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Jsonformatter from "./pages/Jsonformatter"
import ApiTester from "./pages/ApiTester"
import PasswordGenerator from "./pages/PasswordGenerator"
import Dashboard from "./pages/Dashboard"

function App(){
return(
<BrowserRouter>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/json" element={<Jsonformatter/>}/>
<Route path="/api" element={<ApiTester/>}/>
<Route path="/password" element={<PasswordGenerator/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>

</Routes>
</BrowserRouter>
)
}

export default App