// import logo from './logo.svg';
import './App.css';
import { IMAGES } from './Images.js';// image urls, replace with ajax response
import Gallery from './Gallery.js';
import { React, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Due to large image size, click on a thumbnail will take a sec or so to load the image in main panel</div>
        <Gallery images={IMAGES}/>
      </header>
    </div>
  );
}

export default App;
