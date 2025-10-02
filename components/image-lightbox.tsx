"use client";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  event: string;
  location: string;
}

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: ImageLightboxProps) {
  if (!images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-0" showCloseButton={false}>
        {/* Hidden Accessibility Components */}
        <DialogTitle className="sr-only">
          {currentImage.event} - {currentImage.category}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {currentImage.category} event in {currentImage.location} Image {currentIndex + 1} of {images.length}.
        </DialogDescription>
        
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 cursor-pointer"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20 cursor-pointer"
                onClick={onPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20 cursor-pointer"
                onClick={onNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Image */}
          <div className="flex items-center justify-center min-h-[60vh] max-h-[80vh]">
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain"
              width={800}
              height={600}
            />
          </div>

          {/* Image Info */}
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">{currentImage.event}</h3>
            <p className="text-white/80">
              {currentImage.category} • {currentImage.location} 
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
