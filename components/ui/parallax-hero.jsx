"use client"

import React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


export function ParallaxHero({ children, backgroundImages, className = "" }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background slider */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="relative w-full h-full">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === 0 ? 1 : 0 }}
              transition={{ duration: 1, delay: index * 3 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
