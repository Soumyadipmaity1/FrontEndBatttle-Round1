'use client';

import { useState, useEffect, ReactNode } from 'react';
import { FaCreditCard, FaBolt, FaLayerGroup, FaBell } from 'react-icons/fa';

// Define types for our feature structure
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  textColor: string;
  gradientFrom: string;
  gradientTo: string;
  content: ReactNode;
}

// Feature data with enhanced color scheme
const features: Feature[] = [
  {
    id: 'billing',
    title: 'Real-Time Convergent Billing',
    description: 'Instantaneous, accurate billing across all services and payment methods.',
    icon: <FaCreditCard className="text-2xl" />,
    color: 'bg-purple-100',
    textColor: 'text-purple-600',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
    content: (
      <div className="p-4">
        <div className="flex items-center space-x-8 mt-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">114</div>
            <div className="text-sm text-gray-500">Estimated Invoices</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">42 MIN</div>
            <div className="text-sm text-gray-500">Estimated duration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">17 DAYS</div>
            <div className="text-sm text-gray-500">Current period remaining</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'charging',
    title: 'Dynamic Charging',
    description: 'Real-time charging and rating for all service types with flexible configurations.',
    icon: <FaBolt className="text-2xl" />,
    color: 'bg-pink-100',
    textColor: 'text-pink-600',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-blue-500',
    content: (
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Real-time Rating</div>
            <div className="text-sm text-gray-500">Process thousands of transactions per second</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">Usage Monitoring</div>
            <div className="text-sm text-gray-500">Track consumption across services</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'catalog',
    title: 'Product Catalog',
    description: 'Intuitive tools that empower customers to manage their accounts with ease, freeing up your team.',
    icon: <FaLayerGroup className="text-2xl" />,
    color: 'bg-blue-100',
    textColor: 'text-blue-600',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-purple-500',
    content: (
      <div className="p-4">
        <div className="mt-4">
          <div className="mb-2 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">+ ADD-ONS</div>
          <div className="flex space-x-4">
            <div className="bg-black text-white p-2 w-10 h-10 flex items-center justify-center rounded-md shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">N</div>
            <div className="bg-white p-2 w-10 h-10 flex items-center justify-center rounded-md border shadow-lg shadow-pink-500/10 hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105">
              <span className="text-black">⌘</span>
            </div>
            <div className="bg-white p-2 w-10 h-10 flex items-center justify-center rounded-md border shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <span className="text-blue-500">S</span>
            </div>
          </div>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-xs text-blue-500">MOBILEAPP ONLY</div>
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">TOTAL UNLIMITED</div>
            <div className="text-sm text-gray-500">Unlimited minutes</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'events',
    title: 'Events Management',
    description: 'Comprehensive event tracking and management across your service ecosystem.',
    icon: <FaBell className="text-2xl" />,
    color: 'bg-purple-100',
    textColor: 'text-purple-600',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
    content: (
      <div className="p-4">
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Event Logging</div>
            <div className="text-sm text-gray-500">Track all system activities</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Real-time Alerts</div>
            <div className="text-sm text-gray-500">Instant notifications</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationComplete, setAnimationComplete] = useState<boolean[]>([false, false, false, false]);
  const autoRotateDuration = 5000; // 5 seconds per feature
  const animationDuration = 2000; // 2 seconds for border filling
  
  // Reset all animations when changing features
  const resetAnimations = () => {
    setAnimationComplete([false, false, false, false]);
  };
  
  // Handle feature change with proper animation states
  const changeFeature = (index: number) => {
    resetAnimations();
    setIsTransitioning(true);
    setProgress(0);
    setActiveFeature(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Mark a tab's animation as complete
  const markAnimationComplete = (index: number) => {
    setAnimationComplete(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  useEffect(() => {
    // Progress bar animation - more granular for smoother animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        // Accelerate slightly toward end for natural easing
        const increment = prev > 85 ? 0.7 : prev > 60 ? 0.6 : 0.5;
        return Math.min(prev + increment, 100);
      });
    }, autoRotateDuration / 200);

    // Mark animation as complete after animationDuration
    const animationTimer = setTimeout(() => {
      markAnimationComplete(activeFeature);
    }, animationDuration);

    // Auto-rotate to next feature when current feature animation is complete
    const rotateTimer = setTimeout(() => {
      changeFeature((activeFeature + 1) % features.length);
    }, autoRotateDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(animationTimer);
      clearTimeout(rotateTimer);
    };
  }, [activeFeature]);

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Unparalleled</h1>
          <h2 className="text-5xl font-bold text-white mb-10">BSS/OSS Capabilities</h2>
        </div>
        
        <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 shadow-purple-500/10">
          {/* Feature tabs with enhanced loading animations */}
          <div className="flex">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => !isTransitioning && changeFeature(index)}
                className={`relative flex-1 p-4 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden
                  ${activeFeature === index ? 'bg-gradient-to-br from-slate-800/70 to-slate-900/70' : 'bg-slate-800/50 hover:bg-slate-800/70'}`}
              >
                {/* Tab border that fills when active */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo}`}
                  style={{
                    width: activeFeature === index ? `${progress}%` : '0%',
                    transition: activeFeature === index ? 'width 2s ease-in-out' : 'width 0.3s ease-out',
                    opacity: 1
                  }}
                />
                
                {/* Animated glowing effect when border filling completes */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} transition-opacity duration-500`}
                  style={{
                    opacity: animationComplete[index] && activeFeature === index ? 0.15 : 0
                  }}
                />
                
                {/* Icon container with animation */}
                <div 
                  className={`relative w-12 h-12 rounded-lg transition-all duration-500 flex items-center justify-center mb-2
                    ${activeFeature === index 
                      ? `bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} text-white shadow-lg` 
                      : `${feature.color} ${feature.textColor}`}`}
                  style={{
                    transform: animationComplete[index] && activeFeature === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  {feature.icon}
                </div>
                
                {/* Tab name with fade in animation */}
                <span 
                  className={`uppercase font-medium transition-all duration-500 text-sm
                    ${activeFeature === index ? 'opacity-100' : 'opacity-40'}`}
                  style={{
                    background: activeFeature === index ? 'linear-gradient(to right, #e2e8f0, #f8fafc)' : '',
                    WebkitBackgroundClip: activeFeature === index ? 'text' : '',
                    WebkitTextFillColor: activeFeature === index ? 'transparent' : '',
                  }}
                >
                  {feature.id}
                </span>
                
                {/* Progress indicator circles */}
                <div className="absolute top-2 right-2 flex space-x-1">
                  {activeFeature === index && (
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"/>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Content Area with synchronized animations */}
          <div className="p-8 min-h-[400px] relative">
            {features.map((feature, index) => {
              const isActive = activeFeature === index;
              const isAnimated = isActive && animationComplete[index];
              
              return (
                <div
                  key={feature.id}
                  className={`absolute inset-0 p-8 transition-all duration-700 transform
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                >
                  {/* Content that appears after border fills completely */}
                  <div 
                    className="flex flex-col md:flex-row"
                    style={{
                      opacity: isAnimated ? 1 : 0.7,
                      transition: 'opacity 0.5s ease-in-out',
                      filter: isAnimated ? 'blur(0px)' : 'blur(1px)'
                    }}
                  >
                    <div 
                      className="md:w-1/2 mb-6 md:mb-0 transition-all duration-700 transform"
                      style={{ 
                        transform: isAnimated ? 'translateX(0)' : 'translateX(-10px)',
                        transition: 'all 0.7s ease-out'
                      }}
                    >
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {feature.description}
                      </p>
                    </div>
                    <div 
                      className="md:w-1/2 md:pl-8 transition-all duration-700 transform"
                      style={{ 
                        transform: isAnimated ? 'translateX(0)' : 'translateX(10px)',
                        transition: 'all 0.7s ease-out 0.1s' // slight delay for staggered animation
                      }}
                    >
                      {feature.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

         
        </div>
      </div>
    </div>
  );
}
