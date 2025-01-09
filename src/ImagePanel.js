import React, { useContext } from 'react';
import GalleryContext from './GalleryContext';

function ImagePanel(props) {
    const {IMAGES, index, setIndex} = useContext(GalleryContext);
    return <div id="imagepanel"><img src={IMAGES[index].full}/></div>
}
export default ImagePanel;