import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import JsonFormatter from "./pages/JsonFormatter"
import ApiTester from "./pages/ApiTester"
import PasswordGenerator from "./pages/PasswordGenerator"

function App(){
return(
<BrowserRouter>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/json" element={<JsonFormatter/>}/>
<Route path="/api" element={<ApiTester/>}/>
<Route path="/password" element={<PasswordGenerator/>}/>

</Routes>
</BrowserRouter>
)
}

export default App