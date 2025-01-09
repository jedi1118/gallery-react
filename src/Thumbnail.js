import { useState, React, useContext } from 'react';

import GalleryContext from './GalleryContext.js';

function Thumbmail(props) {
    const {IMAGES, index, setIndex} = useContext(GalleryContext);

    return <img src={IMAGES[props.index].thumb} onClick={()=>{setIndex(props.index)}} />;
  }
  export default Thumbmail;