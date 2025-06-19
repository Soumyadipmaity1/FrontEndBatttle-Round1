"use client"

import { useState, useEffect, useCallback, useRef } from 'react';

// Types for props and ripple state
interface RippleProps {
  duration?: number;
  color?: string;
  opacity?: number;
  size?: number;
  triggerOnHover?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const RippleEffect: React.FC<RippleProps> = ({
  duration = 2000,
  color = 'rgba(30, 144, 255, 0.6)',
  opacity = 0.6,
  size = 100,
  triggerOnHover = true,
  className = '',
  children,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [counter, setCounter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to create a new ripple
  const createRipple = useCallback(
    (x: number, y: number) => {
      const newRipple = {
        id: counter,
        x,
        y,
        size: Math.random() * size + size,
        opacity: Math.random() * opacity + opacity * 0.3,
        color,
      };

      setRipples((prevRipples) => [...prevRipples, newRipple]);
      setCounter((prevCounter) => prevCounter + 1);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prevRipples) => 
          prevRipples.filter((ripple) => ripple.id !== newRipple.id)
        );
      }, duration);
    },
    [counter, duration, opacity, size, color]
  );

  // Throttle function to limit ripple creation
  const throttle = (callback: Function, delay: number) => {
    let throttleTimeout: ReturnType<typeof setTimeout> | null = null;
    let lastExecTime = 0;
  
    return function(...args: any[]) {
      const now = Date.now();
      const timeSinceLastExec = now - lastExecTime;
      
      if (timeSinceLastExec > delay) {
        lastExecTime = now;
        callback(...args);
      } else if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          lastExecTime = Date.now();
          throttleTimeout = null;
          callback(...args);
        }, delay - timeSinceLastExec);
      }
    };
  };

  useEffect(() => {
    if (!triggerOnHover || !containerRef.current) return;
    
    const container = containerRef.current;
    
    // Create throttled mousemove handler
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (Math.random() > 0.7) { // Only create ripple 30% of the time for performance
        // Get container's position relative to viewport
        const rect = container.getBoundingClientRect();
        
        // Calculate mouse position relative to container
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        createRipple(x, y);
      }
    }, 100);

    // Add event listener for mouse movement on the container only
    container.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [createRipple, triggerOnHover]);

  // Optional: Create periodic ripples for more dynamic effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const rect = container.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        createRipple(x, y);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [createRipple]);

  return (
    <div ref={containerRef} className={`rippleContainer ${className}`}>
      {children}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="rippleElement"
          style={{
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            opacity: ripple.opacity,
            background: `radial-gradient(circle, ${ripple.color} 0%, transparent 70%)`,
            animationDuration: `${duration}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;