import { useState, useEffect } from 'react';
import Image from 'next/image';

export function ImageCarousel({ images, projectName }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsLoading(true);
  }, [images]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const nextImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsLoading(true);
    }
  };

  const prevImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsLoading(true);
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setIsLoading(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Si pas d'images, afficher un message
  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-zinc-100 dark:bg-zinc-700 rounded-lg">
        <p className="text-zinc-500 dark:text-zinc-400">Aucune image disponible</p>
      </div>
    );
  }

  const carouselClasses = isFullscreen 
    ? "fixed inset-0 z-50 bg-black flex items-center justify-center" 
    : "relative h-64 md:h-96 w-full rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-700";

  return (
    <div className={carouselClasses}>
      {/* Bouton de fermeture en mode plein écran */}
      {isFullscreen && (
        <button 
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-white/70 dark:bg-zinc-800/70 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800 transition-colors shadow-lg"
          aria-label="Fermer le plein écran"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
     
      <div className="relative h-full w-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 animate-pulse">
            <span className="text-zinc-400 dark:text-zinc-500">Chargement...</span>
          </div>
        )}
        <div className="relative h-full w-full">
          {/* Correction ici : ajout des propriétés width et height */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={images[currentImageIndex]}
              alt={`Capture d'écran ${currentImageIndex + 1} de ${projectName}`}
              layout="fill"
              objectFit="contain"
              className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoadingComplete={handleImageLoad}
              unoptimized
            />
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button 
            onClick={prevImage}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 dark:bg-zinc-800/70 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800 transition-colors shadow-lg"
            aria-label="Image précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextImage}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 dark:bg-zinc-800/70 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800 transition-colors shadow-lg"
            aria-label="Image suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-teal-500 dark:bg-teal-400 scale-125' 
                  : 'bg-zinc-300 dark:bg-zinc-600'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Infos et bouton plein écran */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <span className="px-2 py-1 text-xs font-medium bg-black/50 text-white rounded-md">
          {currentImageIndex + 1} / {images.length}
        </span>
        
        {!isFullscreen && (
          <button 
            onClick={toggleFullscreen}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/70 dark:bg-zinc-800/70 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800 transition-colors"
            aria-label="Mode plein écran"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5m-5 6v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}