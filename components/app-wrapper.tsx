"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { LoadingScreen } from "./loading-screen"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Simulate app initialization
    const initializeApp = async () => {
      // Add any initialization logic here
      await new Promise((resolve) => setTimeout(resolve, 100))
      setIsReady(true)
    }

    initializeApp()
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (!isReady) {
    return null 
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>{children}</div>
    </>
  )
}
