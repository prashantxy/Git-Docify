"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Code, Zap, GitBranch, Terminal, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-gray-400 text-xs font-mono border border-gray-800">
            {'<div className="magic">'}
          </div>
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-float-delayed">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-gray-400 text-xs font-mono border border-gray-800">
            {"npm install peach"}
          </div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 animate-float-slow">
          <Terminal className="w-8 h-8 text-gray-600" />
        </div>
        <div className="absolute top-32 right-32 opacity-30">
          <Code className="w-6 h-6 text-gray-600 animate-pulse" />
        </div>
        <div className="absolute bottom-32 right-40 opacity-25">
          <GitBranch className="w-6 h-6 text-gray-600 animate-bounce-slow" />
        </div>
        <div className="absolute top-60 left-40 opacity-20">
          <FileText className="w-10 h-10 text-gray-600 animate-float" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-600/15 to-cyan-600/15 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-600/25 to-teal-600/25 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        {/* Central Logo/Fish Element */}
        <div className="relative mb-12 animate-float">
          <div className="w-80 h-40 bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-gray-600/30 shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <span className="text-white text-3xl font-light">Git-Docify</span>
            </div>
          </div>
          {/* Floating sparkles around the logo */}
          <Sparkles className="absolute -top-3 -right-3 w-6 h-6 text-yellow-400 animate-pulse" />
          <Sparkles className="absolute -bottom-3 -left-3 w-4 h-4 text-cyan-400 animate-pulse delay-500" />
          <Zap className="absolute top-1/2 -left-10 w-5 h-5 text-purple-400 animate-bounce" />
          <Zap className="absolute top-1/4 -right-8 w-4 h-4 text-pink-400 animate-pulse delay-700" />
        </div>

        <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-tight">
          Start Writing{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent italic font-normal">
            Magic Docs
          </span>{" "}
          today.
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
  Turn your GitHub repos into crystal-clear documentation—instantly. Let AI read, write, and simplify your README.
</p>


        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            size="lg"
            className="bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-600 backdrop-blur-sm px-10 py-4 text-lg rounded-full"
          >
            Take a Demo
          </Button>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-10 py-4 text-lg rounded-full font-medium"
          >
            Get started — it's free
          </Button>
        </div>
      </div>
    </div>
  )
}
