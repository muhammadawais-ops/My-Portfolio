import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = "" }: ProfileImageProps) {
  const imageUrl = "https://aqlionix.com/wp-content/uploads/2026/05/ChatGPTImageMay13202609_53_44A.jpeg";

  return (
    <div className={`relative group ${className}`}>
      <motion.div
        initial={{ filter: 'grayscale(100%)', opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ filter: 'grayscale(0%)' }}
        viewport={{ once: true }}
        className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-sm border border-white/10"
      >
        <img 
          src={imageUrl}
          alt="Muhammad Awais"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-brand z-20" />
      <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-brand z-20" />
      
      <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full -z-10 group-hover:bg-brand/20 transition-colors duration-500" />
    </div>
  );
}
