import { useState, React, useContext } from 'react';

import Thumbnail from './Thumbnail.js';
import GalleryContext from './GalleryContext.js';

function Carousel() {
    const {IMAGES, index, setIndex} = useContext(GalleryContext);
    const [firstIndex, setFirstIndex] = useState(0);// this state is only for this component
    // TODO: use image size/firstIndex to calculate "ul" how many px to the left
    function toPrev() {
        if (firstIndex <= 0 ) {
            return;
        }
        setFirstIndex(firstIndex-1);
    }
    function toNext() {
        if (firstIndex +7 > IMAGES.length) {
            return;
        }
        setFirstIndex(firstIndex+1);
    }
    const items = [];
    for (let i = 0; i < IMAGES.length; i++) {
        // simply hide  the element when imdex is smaller then the first carousel image
        items.push(<li key={i} className={(firstIndex <= i)?'':'hidden'}>
            <Thumbnail index={i}/></li>);
    }
    return (
        <div id="carousel">
            <div className="arrow left" onClick={()=>{toPrev()}}></div>
            <div className="arrow right" onClick={()=>{toNext()}}></div>
            <ul>
                {items}
            </ul>
        </div>
    )
  }
  export default Carousel;