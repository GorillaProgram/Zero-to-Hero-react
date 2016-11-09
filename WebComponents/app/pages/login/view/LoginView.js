/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import Constant from '../../../main/constant/Constant';
import CommonStyles from '../../../main/constant/CommonStyle';
import { Button, EditView } from '../../../main/components/view/UIComponents';

class LoginView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <div style={styles.loginLayout}>
                        <div style={styles.loginHeaderLayout}>
                            柜员登录
                        </div>
                        <div style={styles.loginContentLayout}>
                            <EditView
                                style={styles.loginUserName}
                                image="./static/imgs/ad.png" />
                            <EditView
                                style={styles.loginPassowrd}
                                image="./static/imgs/ad.png" />
                            <Button
                                title="登录"
                                style={styles.loginButton}
                                onClick={() => {
                                    console.log('=======');
                                }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Constant.screenHeight - 40,
    },
    loginLayout: {
        width: '60%',
        height: Constant.loginDialogHeight,
        border: '1px solid #888888',
        borderRadius: 10,
        overflow: 'hidden'
    },
    loginHeaderLayout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: Constant.dialogTitleHeight,
        paddingLeft: 15,
        borderBottom: '1px solid #888888',
    },
    loginContentLayout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: Constant.loginDialogHeight - Constant.dialogTitleHeight,
    },
    loginUserName: {
        marginTop: 30
    },
    loginPassowrd: {
        marginTop: 20
    },
    loginButton: {
        marginTop: 20
    }

};

export default LoginView;
