import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = props
    }
    render() {
        const items = [];
        for (let i = 0; i < this.state.images.length; i++) {
            items.push(<li><img src={this.state.images[i].thumb}/></li>);
        }
        return <div id="carousel">carousel
            <ul>
                {items}
            </ul>
        </div>
    }
  }
  export default Carousel;