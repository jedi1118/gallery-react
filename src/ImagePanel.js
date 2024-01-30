import React from 'react';

class ImagePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected
        };
        console.log('ImagePanel=', this.state.selected);
    }
    render() {
        return <div id="imagepanel"><img src={this.state.selected.img}/></div>
    };
}
export default ImagePanel;