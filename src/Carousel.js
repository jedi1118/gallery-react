import React from 'react';
import Thumbnail from './Thumbnail.js';

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: props.images,
            firstIndex: 0// first image showing in the carousel
        }
    }
    // TODO: use image size/firstIndex to calculate "ul" how many px to the left
    toPrev = () => {
        if (this.state.firstIndex <= 0 ) {
            return;
        }
        this.setState({ firstIndex: --this.state.firstIndex});
    }
    toNext = () => {
        if (this.state.firstIndex +7 > this.state.images.length) {
            return;
        }
        this.setState({ firstIndex: ++this.state.firstIndex});
    }
    render() {
        const items = [];
        for (let i = 0; i < this.state.images.length; i++) {
            // simply hide  the element when imdex is smaller then the first carousel image
            items.push(<li key={i} className={(this.state.firstIndex <= i)?'':'hidden'}>
                <Thumbnail image={this.state.images[i]} onclick={()=> { this.props.onclick(i)}}/></li>);
        }
        return <div id="carousel">
            <div className="arrow left" onClick={this.toPrev}></div>
            <div className="arrow right" onClick={this.toNext}></div>
            <ul>
                {items}
            </ul>
        </div>
    }
  }
  export default Carousel;