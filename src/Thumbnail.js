import React from 'react';

class Thumbmail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <img src={this.props.image.thumb} onClick={this.props.onclick} />;
    }
  }
  export default Thumbmail;