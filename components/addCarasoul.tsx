"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CarouselItem {
  id: number;
  defaultImage: string;
  hoverImage: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    defaultImage: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    defaultImage: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    defaultImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    defaultImage: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&auto=format&fit=crop"
  },
];

const ProductCarousel: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full py-12 my-10 px-4 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-10 blur-xl" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Add section heading */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Our Product Carousel
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
          {carouselData.map((item) => (
            <div 
              key={item.id} 
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 "
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg" />
              
              <div className="relative aspect-square w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: hoveredId === item.id ? 0 : 1,
                    scale: hoveredId === item.id ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={item.defaultImage}
                    alt="Product image"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                    priority={item.id <= 2}
                    className="transition-transform duration-700 ease-in-out"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredId === item.id ? 1 : 0,
                    scale: hoveredId === item.id ? 1 : 1.1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={item.hoverImage}
                    alt="Product hover image"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 ease-in-out"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
