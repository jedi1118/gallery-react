import React from 'react';

class ImagePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected || 0
        };
    }
    render() {
        return <h1>ImagePanel</h1>
    };
}
export default ImagePanel;