import { motion as _motion} from "framer-motion"

export default function ToolCard({icon,title}){

return(

<_motion.div
whileHover={{scale:1.1, rotate:2}}
className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg cursor-pointer"
>

<div className="text-4xl mb-3">{icon}</div>

<h2 className="text-xl font-bold">{title}</h2>

</_motion.div>

)

}