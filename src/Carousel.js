import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: props.images
        }
    }
    render() {
        const items = [];
        for (let i = 0; i < this.state.images.length; i++) {
            items.push(<li key={i}><img src={this.state.images[i].thumb}/></li>);
        }
        return <div id="carousel">
            <div className="arrow left"></div>
            <div className="arrow right"></div>
            <ul>
                {items}
            </ul>
        </div>
    }
  }
  export default Carousel;