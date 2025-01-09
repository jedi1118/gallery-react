import { useState, React, useContext } from 'react';

import GalleryContext from './GalleryContext.js';
import ImagePanel from './ImagePanel.js';
import Carousel from './Carousel.js';
import './Gallery.css';

function Gallery() {
  return (
    <section id="gallery">
      <ImagePanel/>
      <Carousel/>
    </section>
  )
}
export default Gallery;