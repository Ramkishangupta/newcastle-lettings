import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkedAlt, FaThLarge, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const tabButtonClasses = (isActive) =>
  clsx(
    'flex items-center gap-2 px-5 py-3 text-base md:text-lg font-medium border-b-2 transition-colors duration-300',
    isActive ? 'text-white border-white' : 'text-gray-400 border-transparent hover:text-white'
  );

const Gallery = ({ images, locationEmbedUrl }) => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handleImageError = () => setHasError(true);

  return (
    <section className="bg-[#0C1C4D] text-white py-6">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-8 mb-6">
        <button
          className={tabButtonClasses(activeTab === 'gallery')}
          onClick={() => setActiveTab('gallery')}
          aria-label="Switch to gallery"
        >
          <FaThLarge /> Gallery
        </button>
        <button
          className={tabButtonClasses(activeTab === 'location')}
          onClick={() => setActiveTab('location')}
          aria-label="Switch to location"
        >
          <FaMapMarkedAlt /> Location
        </button>
      </div>

      {/* Content Area */}
      <div className="relative w-full max-w-5xl mx-auto px-4">
        {activeTab === 'gallery' && (
          <>
            {/* Gallery Image Container */}
<div className="relative overflow-hidden rounded-lg mb-6 sm:h-[250px] md:h-[200px] lg:h-[500px]">

              <AnimatePresence mode="wait">
                {!hasError ? (
                  <motion.img
                    key={images[currentIndex]}
                    src={images[currentIndex]}
                    alt={`Gallery image ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    onError={handleImageError}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-300 text-lg">
                    Failed to load image.
                  </div>
                )}
              </AnimatePresence>

              {/* Arrows */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full focus:outline-none"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full focus:outline-none"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </div>

          </>
        )}

        {activeTab === 'location' && (
          <div className="w-full h-[300px] sm:h-[250px] md:h-[200px] lg:h-[500px]">
            <iframe
              src={locationEmbedUrl}
              title="Location Map"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  locationEmbedUrl: PropTypes.string.isRequired,
};

export default Gallery;
