/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import UITab from './UITab';


class UITabGroup extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                <div style={{...styles.tabLayout, ...this.props.tabLayout}}>
                    {this.props.children}
                </div>
                <div style={{...styles.tabContentLayout, ...this.props.tabContentLayout}}>

                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 44,
    },
    tabLayout: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        border: '1px solid #1177DB'
    },
    tabContentLayout: {

    }
};

UITabGroup.propTypes = {

};

export default UITabGroup;
