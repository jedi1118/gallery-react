import ImagePanel from './ImagePanel.js';
import Carousel from './Carousel.js';
import './Gallery.css';

import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
      return <section id="gallery">
        <ImagePanel/>
        <Carousel images={this.state.images} />
      </section>
    };
}
export default Gallery;