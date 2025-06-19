"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FaArrowRight } from 'react-icons/fa';

// Organize companies in sets of 6 for rotation
const companySets = [
  [
    { id: 1, name: 'Perplexity', logo: '/logos/perplexity.png' },
    { id: 2, name: 'Superbell', logo: '/logos/superbell.png' },
    { id: 3, name: 'Monzo', logo: '/logos/monzo.png' },
    { id: 4, name: 'Raycast', logo: '/logos/raycast.png' },
    { id: 5, name: 'Retool', logo: '/logos/retool.png' },
    { id: 6, name: 'Mercury', logo: '/logos/mercury.png' },
  ],
  [
    { id: 7, name: 'Stripe', logo: '/logos/stripe.png' },
    { id: 8, name: 'Shopify', logo: '/logos/shopify.png' },
    { id: 9, name: 'Airbnb', logo: '/logos/airbnb.png' },
    { id: 10, name: 'Slack', logo: '/logos/slack.png' },
    { id: 11, name: 'Notion', logo: '/logos/notion.png' },
    { id: 12, name: 'Atlassian', logo: '/logos/atlassian.png' },
  ],
];

const CustomerSay = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Rotate through company sets every 2 seconds
  useEffect(() => {
    if (isHovered) return; // Don't rotate when hovering
    
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % companySets.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border-0 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
      
      {/* Content background */}
      <div className="absolute inset-[1px] bg-background rounded-lg" />
      
      {/* Content */}
      <div className="relative">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Our Partners
          </h2>
          <p className="text-muted-foreground">
            Trusted by leading companies worldwide
          </p>
        </div>
        
        {/* Content container with conditional blur */}
        <div className={`transition-all duration-300 ${isHovered ? 'filter blur-sm' : ''}`}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSetIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-4 md:gap-6"
            >
              {companySets[currentSetIndex].map((company) => (
                <motion.div
                  key={company.id}
                  className="relative flex items-center justify-center p-4 rounded-lg bg-muted/40 backdrop-blur-sm border border-purple-500/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-12 w-full relative flex items-center justify-center">
                    <div className="text-center font-medium text-foreground">
                      {company.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {companySets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSetIndex(index)}
                aria-label={`View company set ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSetIndex 
                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Glassmorphic "View more" button that appears on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="flex items-center gap-2 py-3 px-6 rounded-full 
                  bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-md
                  border border-white/20 shadow-lg 
                  text-foreground hover:shadow-purple-500/20
                  hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-pink-500/40
                  transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View more <FaArrowRight className="ml-1" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-purple-500 opacity-10 blur-2xl" />
      <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-pink-500 opacity-10 blur-2xl" />
    </motion.div>
  );
};

export default CustomerSay;
