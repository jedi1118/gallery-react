import { React, useState, createContext } from 'react';

import './App.css';
import Gallery from './Gallery.js';
import GalleryContext from './GalleryContext.js';
import { IMAGES } from './Images.js';

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div>Image gallery with thumnail carousel in React + Context API.</div>
        <div>images loaded from pexels.com</div>
        <div>Due to large image size, click on a thumbnail will take a sec or so to load the image in main panel</div>
        <GalleryContext.Provider value={{IMAGES, index, setIndex}}>
          <Gallery/>
        </GalleryContext.Provider>
      </header>
    </div>
  );
}

export default App;
