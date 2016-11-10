import React, { Component } from 'react';

class UISquare extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.constainer, ...this.props.style}} onClick={this.props.onClick}>
                <img src={this.props.image} style={styles.image} />
                <label style={styles.title}>{this.props.title}</label>
            </div>
        );
    }
}

const styles = {
    constainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        color: '#333333',
        fontSize: 16,
        borderRadius: 5
    },
    image: {
        width: 55,
        height: 55
    },
    title: {
        fontSize: 16,
        marginTop: 5
    },
}

export default UISquare;
