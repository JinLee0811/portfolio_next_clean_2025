"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isFirstVisit: boolean;
}

export default function LoadingScreen({ isFirstVisit }: LoadingScreenProps) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    // Longer welcome animation for first visit
    const welcomeTimer = setTimeout(
      () => {
        setShowWelcome(false);
        setShowRole(true);
      },
      isFirstVisit ? 2500 : 1000
    );

    return () => clearTimeout(welcomeTimer);
  }, [isFirstVisit]);

  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isFirstVisit ? 1.2 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const welcomeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isFirstVisit ? 0.8 : 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: isFirstVisit ? 0.8 : 0.5,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: isFirstVisit ? 1.5 : 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-navy-dark overflow-hidden'>
      {/* Background Elements */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={circleVariants}
        className='absolute w-[800px] h-[800px] rounded-full border border-slate-200/50 dark:border-slate-800/50'
      />
      <motion.div
        initial='hidden'
        animate='visible'
        variants={circleVariants}
        transition={{ delay: isFirstVisit ? 0.3 : 0.2 }}
        className='absolute w-[600px] h-[600px] rounded-full border border-slate-200/50 dark:border-slate-800/50'
      />
      <motion.div
        initial='hidden'
        animate='visible'
        variants={circleVariants}
        transition={{ delay: isFirstVisit ? 0.6 : 0.4 }}
        className='absolute w-[400px] h-[400px] rounded-full border border-slate-200/50 dark:border-slate-800/50'
      />

      {/* Decorative Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: isFirstVisit ? 1.5 : 1, delay: isFirstVisit ? 0.8 : 0.5 }}
        className='absolute top-[45%] w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent'
      />

      {/* Main Content */}
      <div className='relative flex flex-col items-center z-10'>
        <AnimatePresence mode='wait'>
          {showWelcome ? (
            <motion.div
              key='welcome'
              variants={welcomeVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='absolute text-2xl text-green-600 dark:text-green-400 font-light tracking-widest'>
              WELCOME TO MY SPACE
            </motion.div>
          ) : (
            <motion.div
              key='name'
              className='flex flex-col items-center'
              variants={nameVariants}
              initial='hidden'
              animate='visible'>
              <h1 className='text-7xl md:text-8xl font-bold text-slate-900 dark:text-slate-100 mb-4'>
                Jin Lee
              </h1>
              {showRole && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: isFirstVisit ? 0.5 : 0.3 }}
                  className='space-y-4 text-center'>
                  <p className='text-xl text-green-600 dark:text-green-400 font-light tracking-wider'>
                    FULL STACK DEVELOPER
                  </p>
                  <div className='flex items-center space-x-3 justify-center mt-6'>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: isFirstVisit ? 2 : 1.5,
                          repeat: Infinity,
                          delay: i * (isFirstVisit ? 0.3 : 0.2),
                        }}
                        className='w-2 h-2 rounded-full bg-green-600 dark:bg-green-400'
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Gradient Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isFirstVisit ? 1.5 : 1 }}
        className='absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-green-600/20 dark:via-green-400/20 to-transparent'
      />
    </motion.div>
  );
}
