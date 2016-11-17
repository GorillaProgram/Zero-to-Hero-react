/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CommonToolsView from '../view/CommonToolsView';

class CommonToolsContainer extends Component {

    constructor(props) {
        super(props);

        this.handleClearCacheClick = this.handleClearCacheClick.bind(this);
    }

    /**
     * 清除缓存
     */
    handleClearCacheClick() {

    }

    render() {
        return (
            <CommonToolsView
                handleClearCacheClick={this.handleClearCacheClick}
            />
        );
    }
}

CommonToolsContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

CommonToolsContainer.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(CommonToolsContainer);
