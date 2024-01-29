import ImagePanel from './ImagePanel.js';
import Carousel from './Carousel.js';
import './Gallery.css';

export default function Gallery() {
  return (
    <section id="gallery">
      <ImagePanel/>
      <Carousel/>
    </section>
  );
}