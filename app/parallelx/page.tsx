"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.2]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const parallaxSections = [
    {
      id: 1,
      title: "Discover Innovation",
      description:
        "Explore cutting-edge technology with our modern digital solutions",
      imageUrl: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae",
      color: "from-purple-600 via-pink-500 to-blue-600",
      speed: 0.15,
    },
    {
      id: 2,
      title: "Elegant Design",
      description:
        "Seamless user experiences crafted with attention to every detail",
      imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      color: "from-pink-600 via-purple-500 to-indigo-600",
      speed: 0.25,
    },
    {
      id: 3,
      title: "Future Forward",
      description:
        "Building tomorrow's solutions with today's technology innovations",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      color: "from-blue-600 via-purple-500 to-pink-600",
      speed: 0.35,
    },
    {
      id: 4,
      title: "Digital Transformation",
      description:
        "Reimagine your business with powerful digital capabilities",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      color: "from-indigo-600 via-pink-500 to-purple-600",
      speed: 0.2,
    },
  ];

  const sectionTransforms = parallaxSections.map((section) => ({
    y: useTransform(
      scrollY,
      [section.id * 500 - 300, section.id * 800 + 500],
      [-200, 200]
    ),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: heroY,
            scale: heroScale,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-900/60 to-blue-900/70 mix-blend-overlay z-10" />
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Parallax Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Scroll down to explore our immersive visual journey
          </p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="mt-16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="url(#gradient)"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <div ref={containerRef} className="relative">
        {parallaxSections.map((section, index) => (
          <section
            key={section.id}
            className="relative min-h-screen flex items-center overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                y: sectionTransforms[index].y,
                opacity: isMounted ? 1 : 0,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${section.color} mix-blend-overlay opacity-40 z-10`}
              />
              <Image
                src={section.imageUrl}
                alt={section.title}
                fill
                sizes="100vw"
                className="object-cover opacity-70"
                loading="eager"
              />
            </motion.div>
            <div className="relative z-10 container mx-auto px-4 py-20">
              <motion.div
                initial={{
                  opacity: 0,
                  x: section.id % 2 === 0 ? 100 : -100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`max-w-lg backdrop-blur-lg p-8 rounded-lg border border-white/10 shadow-xl`}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.15), rgba(59, 130, 246, 0.15))`,
                }}
              >
                <h2
                  className={`text-4xl font-bold mb-4 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                >
                  {section.title}
                </h2>
                <p className="text-xl text-gray-200">{section.description}</p>
                <div className="mt-6">
                  <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
                    Learn more
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-purple-900/30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
              Experience the power of modern web design with our optimized
              parallax effects and responsive interfaces
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-medium rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxPage;
