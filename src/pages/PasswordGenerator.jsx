import {useState} from "react"
import Navbar from "../components/Navbar"

export default function PasswordGenerator(){

const [password,setPassword]=useState("")

function generate(){

const chars=
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

let pass=""

for(let i=0;i<12;i++){
pass+=chars[Math.floor(Math.random()*chars.length)]
}

setPassword(pass)

}

return(

<div>

<Navbar/>

<div className="text-center mt-20">

<button
onClick={generate}
className="bg-green-500 px-6 py-2"
>
Generate Password
</button>

<h2 className="mt-6 text-xl">
{password}
</h2>

</div>

</div>

)
}