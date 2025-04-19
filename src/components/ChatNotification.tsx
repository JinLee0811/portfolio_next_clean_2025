"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

interface ChatNotificationProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ChatNotification({ isVisible, onClose }: ChatNotificationProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    console.log("ChatNotification mounted");
    // Initialize audio in useEffect to ensure it's only created on client side
    setAudio(new Audio("/sounds/notification.mp3"));
  }, []);

  useEffect(() => {
    console.log("isVisible changed:", isVisible);
    if (isVisible && audio) {
      console.log("Attempting to play audio");
      // Reset audio to start and play
      audio.currentTime = 0;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Audio playback failed:", error);
        });
      }
    }
  }, [isVisible, audio]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className='fixed bottom-20 right-8 max-w-sm bg-white dark:bg-navy-light rounded-2xl shadow-lg p-4 pr-12 border border-slate-200 dark:border-navy z-50'>
          <button
            onClick={onClose}
            className='absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            aria-label='Close notification'>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <div className='flex items-start gap-3'>
            <div className='p-2 bg-green-100 dark:bg-green-900/30 rounded-full'>
              <ChatBubbleLeftEllipsisIcon className='w-6 h-6 text-green-600 dark:text-green-400' />
            </div>
            <div>
              <h3 className='font-medium text-slate-900 dark:text-slate-100 mb-1'>
                Have any questions?
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Ask me anything about the projects or tech stack! The AI assistant is here to help.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
