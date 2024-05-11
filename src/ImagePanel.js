import React from 'react';

class ImagePanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id="imagepanel"><img src={this.props.src}/></div>
    };
}
export default ImagePanel;