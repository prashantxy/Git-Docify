"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full"></div>
            <span className="text-white text-xl font-light">Git-Docify</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-700">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 group">
                <span>Product</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 group">
                <span>Use Cases</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 group">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">Pricing</button>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
              Login
            </Button>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600">Get a Demo</Button>
            <Button className="bg-white text-black hover:bg-gray-100">Get started — it's free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <button className="text-gray-300 hover:text-white text-left">Product</button>
              <button className="text-gray-300 hover:text-white text-left">Use Cases</button>
              <button className="text-gray-300 hover:text-white text-left">Resources</button>
              <button className="text-gray-300 hover:text-white text-left">Pricing</button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start">
                  Login
                </Button>
                <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 justify-start">
                  Get a Demo
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100 justify-start">Get started — it's free</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
