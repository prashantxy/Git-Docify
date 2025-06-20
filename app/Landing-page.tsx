"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Code, FileText, GitBranch, Sparkles, Terminal, Zap } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Snippets */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-xs font-mono">
            {'<div className="docs">'}
          </div>
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-float-delayed">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-xs font-mono">
            {"npm install docs-gen"}
          </div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 animate-float-slow">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-xs font-mono">{"README.md"}</div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-32 right-32 opacity-30 animate-pulse">
          <Terminal className="w-8 h-8 text-white" />
        </div>
        <div className="absolute bottom-32 right-40 opacity-25 animate-bounce-slow">
          <GitBranch className="w-6 h-6 text-white" />
        </div>
        <div className="absolute top-60 left-40 opacity-20 animate-float">
          <Code className="w-10 h-10 text-white" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-15 blur-2xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-25 blur-xl animate-float-delayed"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <span className="text-white text-xl font-bold">docufish</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-2">
            <button className="text-white hover:text-cyan-200 transition-colors flex items-center space-x-1">
              <span>Features</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-white hover:text-cyan-200 transition-colors flex items-center space-x-1">
              <span>Templates</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-white hover:text-cyan-200 transition-colors flex items-center space-x-1">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-white hover:text-cyan-200 transition-colors">Pricing</button>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Login
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30">Try Demo</Button>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">Get started — it's free</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        {/* Central Tech Fish/Logo */}
        <div className="relative mb-8 animate-float">
          <div className="w-64 h-32 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-2xl font-bold">docufish</span>
            </div>
          </div>
          {/* Floating sparkles around the logo */}
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
          <Sparkles className="absolute -bottom-2 -left-2 w-4 h-4 text-cyan-300 animate-pulse delay-500" />
          <Zap className="absolute top-1/2 -left-8 w-5 h-5 text-purple-300 animate-bounce" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Start building{" "}
          <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent italic">
            docs
          </span>{" "}
          today.
        </h1>

        <p className="text-xl text-white/80 mb-8 max-w-2xl">
          Transform your repository into beautiful documentation automatically. Generate comprehensive README files and
          docs with AI-powered insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3 text-lg"
          >
            Try Demo
          </Button>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Get started — it's free
          </Button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="relative z-40 mt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/70">
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">FEATURES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    AI Generation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    GitHub Integration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">RESOURCES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">USE CASES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Technical Writing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">PLANS</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Free Tier
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
