"use client"

import  React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"



const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  slideInFromBottom: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  },
}

export function AnimatedSection({ children, className = "", animation = "fadeInUp", delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animations[animation].initial}
      animate={isInView ? animations[animation].animate : animations[animation].initial}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}
