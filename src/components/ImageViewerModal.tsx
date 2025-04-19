"use client";

import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center'>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors'>
        <XMarkIcon className='w-8 h-8' />
      </button>

      <button
        onClick={handlePrevious}
        className='absolute left-4 text-white hover:text-gray-300 transition-colors'>
        <ChevronLeftIcon className='w-8 h-8' />
      </button>

      <button
        onClick={handleNext}
        className='absolute right-4 text-white hover:text-gray-300 transition-colors'>
        <ChevronRightIcon className='w-8 h-8' />
      </button>

      <div className='relative w-[90vw] h-[80vh]'>
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          fill
          className='object-contain'
          quality={100}
          priority
        />
      </div>

      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm'>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
