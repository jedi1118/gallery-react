import { useState, React, useContext } from 'react';
import Thumbnail from './Thumbnail.js';
import GalleryContext from './GalleryContext.js';

function Carousel() {
    const {IMAGES, index, setIndex} = useContext(GalleryContext);
    // TODO: use image size/firstIndex to calculate "ul" how many px to the left
    // toPrev = () => {
    //     if (this.state.firstIndex <= 0 ) {
    //         return;
    //     }
    //     this.setState({ firstIndex: --this.state.firstIndex});
    // }
    // toNext = () => {
    //     if (this.state.firstIndex +7 > this.state.images.length) {
    //         return;
    //     }
    //     this.setState({ firstIndex: ++this.state.firstIndex});
    // }
    const items = [];
    for (let i = 0; i < IMAGES.length; i++) {
        // simply hide  the element when imdex is smaller then the first carousel image
        items.push(<li key={i} className={(/*this.state.firstIndex*/0 <= i)?'':'hidden'}>
            <Thumbnail index={i}/></li>);
    }
    return (
        <div id="carousel">
            <div className="arrow left" onClick={()=>{/*this.toPrev*/}}></div>
            <div className="arrow right" onClick={()=>{/*this.toNext*/}}></div>
            <ul>
                {items}
            </ul>
        </div>
    )
  }
  export default Carousel;