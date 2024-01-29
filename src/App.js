import logo from './logo.svg';
import './App.css';
import images from './Images.js';
import Gallery from './Gallery.js';
import { React, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery iamges={images}/>
      </header>
    </div>
  );
}

export default App;
