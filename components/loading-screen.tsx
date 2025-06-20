"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onLoadingComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full"></div>
        <span className="text-white text-4xl font-light">Git-Docify</span>
      </div>

      <p className="text-gray-400 text-lg mb-6">Loading Experience...</p>

      <div className="relative mb-4">
        <div className="w-12 h-12 border-2 border-gray-700 rounded-full"></div>
        <div
          className="absolute inset-0 w-12 h-12 border-2 border-transparent border-t-white rounded-full animate-spin"
          style={{ animationDuration: "1s" }}
        ></div>
      </div>

      <p className="text-white text-lg font-mono">{progress}%</p>
    </div>
  )
}
