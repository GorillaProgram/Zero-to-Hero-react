/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import ImagePath from '../../../../main/constant/ImagePath';

class NoticePanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const noticeView = this.props.models.map((model, index) => {
            return (
                <div key={`${index}`} style={styles.noticeContentLayout} onClick={() => {
                    // TODO 添加点击事件
                    console.log(model.title);
                }}>
                    <img src={ImagePath.noticeContentImage} style={styles.noticeContentImage} />
                    <div style={styles.noticeContent}>{model.title}</div>
                </div>
            );
        });

        return (
            <div style={{...styles.container, ...this.props.style}}>
                <label style={styles.noticeDes}>公告栏</label>
                <img src={ImagePath.progressbar} style={styles.noticeProgressbar} />
                <div style={styles.noticeLayout}>
                    {noticeView}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {

    },
    noticeDes: {
        fontSize: 18,
        marginTop: 13,
        marginLeft: 20
    },
    noticeProgressbar: {
        width: '90%',
        height: 8,
        marginTop: 5,
        marginLeft: '5%',
        marginRight: '5%',
    },
    noticeLayout: {
        height: 80,
        marginTop: 10,
        paddingBottom: 10,
        overflow: 'auto',
    },
    noticeContentLayout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '84%',
        marginTop: 8,
        marginLeft: '8%',
        marginRight: '8%',
        paddingTop: 5,
        paddingBottom: 5,
    },
    noticeContentImage: {
        width: 10,
        height: 15,
    },
    noticeContent: {
        fontSize: 16,
        marginLeft: 5,
    }

}

export default NoticePanel;
