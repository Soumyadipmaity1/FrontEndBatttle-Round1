"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 35) // Smooth progress over ~3.5 seconds

    // Counter animation
    const counterInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 99) {
          clearInterval(counterInterval)
          return 99
        }
        return prev + 1
      })
    }, 36) // Sync with progress

    return () => {
      clearInterval(progressInterval)
      clearInterval(counterInterval)
    }
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true)
        setTimeout(onComplete, 800) // Delay for exit animation
      }, 500)
    }
  }, [progress, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]" />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Main loader content */}
          <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-12 px-4">
            {/* Logo/Brand */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
                  <span className="text-white font-bold text-xl sm:text-2xl">H</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-xl opacity-30 -z-10 animate-pulse"></div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                HackathonPro
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mt-2 font-light">Loading your experience...</p>
            </motion.div> */}

            {/* Enhanced Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-xs sm:max-w-sm"
            >
              <div className="relative">
                {/* Progress bar background */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full relative"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  >
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-sm opacity-75"></div>
                  </motion.div>
                </div>

                {/* Progress percentage */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex justify-between items-center mt-3 text-xs sm:text-sm text-gray-400"
                >
                  <span>Loading</span>
                  <span className="font-mono">{progress}%</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white/60 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Counter in corner - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10"
          >
            <div className="relative">
              <div className="font-mono text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                {counter.toString().padStart(2, "0")}
              </div>
              <div className="absolute -bottom-1 -right-1 w-full h-full border-b-2 border-r-2 border-purple-500/30 rounded-br"></div>
              <div className="text-xs uppercase tracking-widest text-gray-400 mt-1 font-medium">
                Loading
                <span className="animate-pulse inline-flex ml-1">...</span>
              </div>
            </div>
          </motion.div>


          {/* Completion animation */}
          {progress >= 100 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 border-2 border-white/20 rounded-full flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-white text-2xl"
                >
                  ✓
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
