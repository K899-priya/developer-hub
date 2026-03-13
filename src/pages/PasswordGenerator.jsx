import { useState } from "react"
import Navbar from "../components/Navbar"
import MatrixBackground from "../components/MatrixBackground"
import { FaCopy, FaRedo } from "react-icons/fa"
import { QRCodeCanvas } from "qrcode.react"

export default function PasswordGenerator(){

const [length,setLength] = useState(12)
const [password,setPassword] = useState("")
const [upper,setUpper] = useState(true)
const [lower,setLower] = useState(true)
const [numbers,setNumbers] = useState(true)
const [symbols,setSymbols] = useState(true)
const [breach,setBreach] = useState("")

function generatePassword(){

let chars=""

if(upper) chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(lower) chars+="abcdefghijklmnopqrstuvwxyz"
if(numbers) chars+="0123456789"
if(symbols) chars+="!@#$%^&*()_+[]{}"

let pass=""

for(let i=0;i<length;i++){
pass+=chars[Math.floor(Math.random()*chars.length)]
}

setPassword(pass)
checkBreach(pass)

}

function copyPassword(){
navigator.clipboard.writeText(password)
}

function entropy(){

let pool=0

if(upper) pool+=26
if(lower) pool+=26
if(numbers) pool+=10
if(symbols) pool+=32

const entropy = length*Math.log2(pool)

return entropy.toFixed(2)

}

function strength(){

const e = entropy()

if(e < 40) return {label:"Weak",color:"bg-red-500"}
if(e < 70) return {label:"Medium",color:"bg-yellow-500"}
return {label:"Strong",color:"bg-green-500"}

}

async function checkBreach(pass){

try{

const res = await fetch(
`https://api.pwnedpasswords.com/range/${pass.slice(0,5)}`
)

const data = await res.text()

if(data.includes(pass.slice(5).toUpperCase())){
setBreach("⚠ Password found in breach database")
}else{
setBreach("✅ Safe password")
}

}catch{
setBreach("Breach check unavailable")
}

}

const strengthInfo = strength()

return(

<div className="min-h-screen bg-black text-white">

<MatrixBackground/>

<Navbar/>

<div className="max-w-xl mx-auto p-10">

<h1 className="text-4xl font-bold text-cyan-400 mb-6">
Password Generator
</h1>

{/* Password */}

<div className="bg-black/70 border border-gray-700 rounded-lg p-4 flex justify-between items-center">

<p className="break-all">
{password || "Generate a password"}
</p>

<button onClick={copyPassword}>
<FaCopy/>
</button>

</div>

{/* Strength Bar */}

<div className="mt-4">

<p className="text-sm mb-1">
Strength: {strengthInfo.label}
</p>

<div className="w-full bg-gray-800 h-2 rounded">

<div
className={`${strengthInfo.color} h-2 rounded transition-all`}
style={{width:`${Math.min(entropy(),100)}%`}}
></div>

</div>

</div>

{/* Entropy */}

<p className="mt-3 text-gray-400">
Entropy: {entropy()} bits
</p>

{/* Breach Check */}

<p className="mt-2 text-sm">
{breach}
</p>

{/* Length Slider */}

<div className="mt-6">

<label>
Password Length: {length}
</label>

<input
type="range"
min="6"
max="32"
value={length}
onChange={(e)=>setLength(e.target.value)}
className="w-full"
/>

</div>

{/* Options */}

<div className="grid grid-cols-2 gap-4 mt-6">

<label>
<input type="checkbox" checked={upper}
onChange={()=>setUpper(!upper)}/>
Uppercase
</label>

<label>
<input type="checkbox" checked={lower}
onChange={()=>setLower(!lower)}/>
Lowercase
</label>

<label>
<input type="checkbox" checked={numbers}
onChange={()=>setNumbers(!numbers)}/>
Numbers
</label>

<label>
<input type="checkbox" checked={symbols}
onChange={()=>setSymbols(!symbols)}/>
Symbols
</label>

</div>

{/* Buttons */}

<div className="flex gap-4 mt-8">

<button
onClick={generatePassword}
className="bg-cyan-500 px-6 py-3 rounded flex items-center gap-2"
>

<FaRedo/>
Generate

</button>

</div>

{/* QR Code */}

{password && (

<div className="mt-8 text-center">

<p className="mb-2 text-gray-400">
Share password via QR
</p>

<QRCodeCanvas value={password} size={140}/>

</div>

)}

</div>

</div>

)

}