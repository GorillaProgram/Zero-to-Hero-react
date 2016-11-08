/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import CommonStyle from '../../constant/CommonStyle';
import Title from '../view/Title';

class WebView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...CommonStyle.fullScreenContainer, ...styles.container}}>
                <Title />
                <div style={CommonStyle.contentLayout}>
                    <iframe src="http://www.baidu.com" frameborder="0" width="100%" height="100%"></iframe>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {

    },
    contentLayout: {

    }
};

export default WebView;
