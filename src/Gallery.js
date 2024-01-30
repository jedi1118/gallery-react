import ImagePanel from './ImagePanel.js';
import Carousel from './Carousel.js';
import './Gallery.css';

import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          images: props.images
        }
        console.log('Gallery=', this.state);
    }
    render() {
      return <section id="gallery">
        <ImagePanel selected={this.state.images[0]}/>
        <Carousel images={this.state.images} />
      </section>
    };
}
export default Gallery;