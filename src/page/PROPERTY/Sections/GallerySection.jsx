import React from 'react';
import Gallery from './Gallery';

const sampleImages = [
  'https://ezadxdiarsm.exactdn.com/wp-content/uploads/2025/05/Front-Page-1.jpg',
  'https://ezadxdiarsm.exactdn.com/wp-content/uploads/2025/05/Front-Page-2.jpg',
];

const embedMapUrl =
  'https://www.google.com/maps/embed?pb=YOUR_EMBED_URL';

const GallerySection = () => (
  <div>
    <Gallery images={sampleImages} locationEmbedUrl={embedMapUrl} />
  </div>
);

export default GallerySection;
