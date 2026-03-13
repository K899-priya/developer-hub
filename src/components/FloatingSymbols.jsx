import { motion as _motion } from "framer-motion"
import { useState, useEffect } from "react"

const symbols = ["</>", "{ }", "()", "=>", "[]", "<div>"]

export default function FloatingSymbols(){

const [positions,setPositions] = useState([])

useEffect(()=>{

const pos = symbols.map(()=>({
top: `${Math.random()*90}%`,
left: `${Math.random()*90}%`
}))

// eslint-disable-next-line react-hooks/set-state-in-effect
setPositions(pos)

},[])

return(

<div className="fixed inset-0 pointer-events-none">

{symbols.map((sym,i)=>(

<_motion.div
key={i}
className="absolute text-cyan-400 text-xl opacity-30"
animate={{
y:[0,-40,0],
x:[0,20,0]
}}
transition={{
duration:6+i,
repeat:Infinity
}}
style={{
top: positions[i]?.top,
left: positions[i]?.left
}}
>

{sym}

</_motion.div>

))}

</div>

)

}