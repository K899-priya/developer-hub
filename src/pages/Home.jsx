import Navbar from "../components/Navbar";
import Background3D from "../components/Background3D";
import GalaxyBackground from "../components/GalaxyBackground";
import FloatingSymbols from "../components/FloatingSymbols";
import Terminal from "../components/Terminal";
import ToolCard from "../components/ToolCard";

import { motion as _motion } from "framer-motion";

import { FaCode, FaKey, FaServer, FaFileCode } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden">

      <Navbar />

      {/* Background Animations */}
      
      <GalaxyBackground />
      <Background3D />
      <FloatingSymbols />

      {/* Hero Section */}
      <_motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-24"
      >
        <h1 className="text-6xl font-bold bg-gradient-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_cyan]">
          Developer Hub
        </h1>

        <p className="mt-4 text-gray-300">
          All developer tools in one place
        </p>

        {/* Animated Terminal */}
        <div className="flex justify-center">
          <Terminal />
        </div>

      </_motion.div>

      {/* Tool Cards */}
      <div className="grid md:grid-cols-4 gap-8 p-16">

        <ToolCard icon={<FaFileCode />} title="JSON Formatter" />

        <ToolCard icon={<FaServer />} title="API Tester" />

        <ToolCard icon={<FaKey />} title="Password Generator" />

        <ToolCard icon={<FaCode />} title="Markdown Editor" />

      </div>

    </div>
  );
}