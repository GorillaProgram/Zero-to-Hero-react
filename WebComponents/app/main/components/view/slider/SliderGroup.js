import React, { Component } from 'react';
import SquaresSlider from './SquaresSlider';

class SliderGroup extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                <label style={styles.title}>{this.props.title}</label>
                <div style={styles.panel}>
                    <SquaresSlider settings={this.props.settings}>
                        {this.props.children}
                    </SquaresSlider>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        padding: 5,
    },
    panel: {
        height: 100,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        border: '1px solid #888888',
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 40,
    },
}

export default SliderGroup;
