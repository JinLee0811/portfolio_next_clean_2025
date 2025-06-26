"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface ImageViewerModalProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageViewerModal({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ImageViewerModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrevious, handleNext, onClose]);

  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      <div className='fixed inset-0 bg-black/90' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <DialogPanel className='relative w-full max-w-4xl bg-transparent shadow-none'>
          <button
            onClick={onClose}
            className='absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10'
            aria-label='닫기'>
            <XMarkIcon className='w-6 h-6 text-white' />
          </button>
          <button
            onClick={handlePrevious}
            className='absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10'
            aria-label='이전 이미지'>
            <ChevronLeftIcon className='w-6 h-6 text-white' />
          </button>
          <button
            onClick={handleNext}
            className='absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10'
            aria-label='다음 이미지'>
            <ChevronRightIcon className='w-6 h-6 text-white' />
          </button>
          <div className='relative aspect-video'>
            <Image
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              fill
              className='object-contain'
              unoptimized={images[currentIndex].endsWith(".gif")}
            />
          </div>
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm z-10'>
            {currentIndex + 1} / {images.length}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
