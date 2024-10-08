import { useState, React } from 'react';
import ImagePanel from './ImagePanel.js';
import Carousel from './Carousel.js';
import './Gallery.css';

// import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          images: props.images,
          selected: 0
        }
        console.log('Gallery=', this.state);
    }
    onImageClick = (i) => {
      console.log(`onImageClick=${i}, ${this}`);
      this.setState({selected: i});
      console.log(`onImageClick=${i}, state=${this.state.selected}`);
    };

    render() {
      return <section id="gallery">
        <ImagePanel src={this.state.images[this.state.selected].img}/>
        <Carousel images={this.state.images} onclick={this.onImageClick} />
      </section>
    };
}
export default Gallery;