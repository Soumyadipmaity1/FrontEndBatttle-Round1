'use client';

import { useState, useEffect, ReactNode, useRef } from 'react';
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
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const rotateTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Animation timing constants - FASTER TRANSITIONS
  const fillDuration = 1200; // 1.2 seconds for border filling (reduced from 2.5s)
  const contentShowDelay = 50; // 50ms delay before showing content (reduced from 100ms)
  const displayDuration = 1800; // 1.8 seconds to display content after filling (reduced from 3.5s)
  const transitionDuration = 400; // 400ms for fade transition (reduced from 700ms)
  
  // Reset all animations when changing features
  const resetAnimations = () => {
    setAnimationComplete([false, false, false, false]);
    setProgress(0);
  };
  
  // Clean up all timers
  const clearAllTimers = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    if (rotateTimerRef.current) clearTimeout(rotateTimerRef.current);
  };
  
  // Handle feature change with proper animation states
  const changeFeature = (index: number) => {
    if (isTransitioning) return;
    
    clearAllTimers();
    resetAnimations();
    setIsTransitioning(true);
    
    // Brief delay before actually changing the feature for smoother transitions
    setTimeout(() => {
      setActiveFeature(index);
      startAnimationSequence();
      
      // Allow interactions only after transition completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    }, 20); // Reduced from 50ms for faster response
  };

  // Mark a tab's animation as complete
  const markAnimationComplete = (index: number) => {
    setAnimationComplete(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };
  
  // Start the full animation sequence for a feature
  const startAnimationSequence = () => {
    // Border fill animation - FASTER UPDATES
    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
          return 100;
        }
        
        // Custom easing for natural animation - FASTER INCREMENTS
        const baseIncrement = 0.8; // increased from 0.5
        const acceleration = prev < 30 ? 0.4 : // faster start
                          prev < 70 ? 0.8 : // faster middle
                          prev < 90 ? 0.6 : // faster slow down
                          0.4;              // faster finish
        
        return Math.min(prev + baseIncrement + acceleration, 100);
      });
    }, fillDuration / 250); // More frequent updates for smoother appearance

    // Show content when border fill completes
    animationTimerRef.current = setTimeout(() => {
      markAnimationComplete(activeFeature);
    }, fillDuration + contentShowDelay);
    
    // Move to next feature after display duration
    rotateTimerRef.current = setTimeout(() => {
      if (!isTransitioning) {
        const nextFeature = (activeFeature + 1) % features.length;
        changeFeature(nextFeature);
      }
    }, fillDuration + displayDuration);
  };

  // Start animation sequence on initial render and when active feature changes
  useEffect(() => {
    startAnimationSequence();
    
    return () => clearAllTimers();
  }, [activeFeature]);

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">Unparalleled</h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">BSS/OSS Capabilities</h2>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-700">
          {/* Feature tabs with enhanced loading animations */}
          <div className="flex flex-wrap sm:flex-nowrap w-full">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => !isTransitioning && progress >= 100 && changeFeature(index)}
                disabled={isTransitioning}
                className={`relative flex-1 p-3 sm:p-4 flex flex-col items-center justify-center transition-all duration-300 overflow-hidden
                  ${activeFeature === index ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/90' : 'bg-slate-800/50 hover:bg-slate-800/70'}`}
              >
                {/* Tab border that fills when active - now with enhanced gradient and glow */}
                <div 
                  className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo}`}
                  style={{
                    width: activeFeature === index ? `${progress}%` : '0%',
                    transition: activeFeature === index ? `width ${fillDuration/1000}s cubic-bezier(0.25, 0.1, 0.25, 1.0)` : 'width 0.2s ease-out',
                    boxShadow: activeFeature === index && progress > 50 ? '0 0 10px rgba(168, 85, 247, 0.5)' : 'none'
                  }}
                />
                
                {/* Animated background glow effect when active */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} transition-opacity duration-500`}
                  style={{
                    opacity: animationComplete[index] && activeFeature === index ? 0.15 : 0
                  }}
                />
                
                {/* Icon container with animation */}
                <div 
                  className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg transition-all duration-300 flex items-center justify-center mb-2
                    ${activeFeature === index 
                      ? `bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} text-white shadow-lg` 
                      : `${feature.color} ${feature.textColor}`}`}
                  style={{
                    transform: animationComplete[index] && activeFeature === index ? 'scale(1.08)' : 'scale(1)',
                    boxShadow: activeFeature === index ? '0 10px 25px -5px rgba(168, 85, 247, 0.3)' : 'none'
                  }}
                >
                  {feature.icon}
                </div>
                
                {/* Tab name with fade in animation - faster transitions */}
                <span 
                  className={`uppercase font-medium transition-all duration-300 text-xs sm:text-sm
                    ${activeFeature === index ? 'opacity-100' : 'opacity-40'}`}
                  style={{
                    background: activeFeature === index 
                      ? 'linear-gradient(to right, #e2e8f0, #f8fafc)' 
                      : '',
                    WebkitBackgroundClip: activeFeature === index ? 'text' : '',
                    WebkitTextFillColor: activeFeature === index ? 'transparent' : '',
                    letterSpacing: '0.5px'
                  }}
                >
                  {feature.id}
                </span>

                {/* Loading indicator dot - faster pulse */}
                {activeFeature === index && !animationComplete[index] && (
                  <div className="absolute top-2 right-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" 
                         style={{animation: 'pulse 0.8s infinite'}}/>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Content Area with faster animations */}
          <div className="p-5 sm:p-8 min-h-[350px] sm:min-h-[400px] relative">
            {features.map((feature, index) => {
              const isActive = activeFeature === index;
              const isAnimated = isActive && animationComplete[index];
              
              return (
                <div
                  key={feature.id}
                  className={`absolute inset-0 p-5 sm:p-8 transition-all duration-400 transform
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                >
                  {/* Content with enhanced layout and faster animations */}
                  <div 
                    className="flex flex-col md:flex-row gap-6 md:gap-8 h-full"
                    style={{
                      opacity: isAnimated ? 1 : 0.3,
                      transition: 'all 0.4s cubic-bezier(0.3, 0.0, 0.2, 1)',
                      filter: isAnimated ? 'blur(0px)' : 'blur(2px)'
                    }}
                  >
                    <div 
                      className="md:w-2/5 lg:w-1/2"
                      style={{ 
                        transform: isAnimated ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'all 0.4s cubic-bezier(0.3, 0.0, 0.2, 1) 0.05s'
                      }}
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Added call-to-action button */}
                      <div className="mt-6 hidden sm:block">
                        <button 
                          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg 
                                   shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
                        >
                          Explore {feature.id}
                        </button>
                      </div>
                    </div>
                    
                    <div 
                      className="md:w-3/5 lg:w-1/2 md:pl-4 lg:pl-6 border-l border-gray-700/50"
                      style={{ 
                        transform: isAnimated ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'all 0.4s cubic-bezier(0.3, 0.0, 0.2, 1) 0.1s' // Faster with shorter delay
                      }}
                    >
                      {/* Content container with enhanced styling */}
                      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-4 sm:p-5 shadow-lg border border-gray-700/30">
                        {feature.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>       

          {/* Quick navigation controls */}
          <div className="bg-gray-800/50 py-1.5 px-4 flex items-center justify-center space-x-3">
            {features.map((_, index) => (
              <button 
                key={index}
                onClick={() => !isTransitioning && changeFeature(index)}
                disabled={isTransitioning}
                className="relative h-1.5 transition-all duration-300 outline-none"
              >
                <div 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  style={{
                    width: activeFeature === index ? '20px' : '8px'
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
