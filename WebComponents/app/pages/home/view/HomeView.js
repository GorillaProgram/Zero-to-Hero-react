/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import CommonStyles from '../../../main/constant/CommonStyle';
import ImagePath from '../../../main/constant/ImagePath';
import Constant from '../../../main/constant/Constant';
import AdImagesSlider from '../../../main/components/view/slider/AdImagesSlider';
import ProductPanel from '../components/panel/ProductPanel';
import PrevArrow from '../../../main/components/view/slider/arrow/PrevArrow';
import NextArrow from '../../../main/components/view/slider/arrow/NextArrow';

class HomeView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        // 测试数据
        const hotContent = [
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            },
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            },
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            },
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            }
        ];

        const adImagesSliderSettings = {
            className: 'slick-slider',
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots',
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            lazyLoad: true,
            autoplaySpeed: 5000
        };
        const contentSliderSettings = {
            className: 'slick-slider',
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />
        };
        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <div style={styles.homeTopLayout}>
                        <div style={styles.AdImagesSliderLayout}>
                            <AdImagesSlider
                                settings={adImagesSliderSettings}
                                images={this.props.adImages}
                                imageStyle={styles.AdImage} />
                        </div>
                        <div style={styles.noticeLayout}>

                        </div>
                    </div>
                    <div style={styles.homeBottomLayout}>
                        <div style={styles.productSliderLayout}>
                            <ProductPanel
                                title="信用卡产品"
                                image={ImagePath.progressbar}
                                settings={contentSliderSettings}
                                models={hotContent}
                                style={styles.productPanel} />
                        </div>
                        <div style={styles.quicklyEnterPanelLayout}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        width: Constant.matchParent,
        height: Constant.matchParent,
    },
    homeTopLayout: {
        display: 'flex',
        flexDirection: 'row',
        width: Constant.matchParent,
        height: Constant.oneThird,
    },
    homeBottomLayout: {
        display: 'flex',
        flexDirection: 'row',
        width: Constant.matchParent,
        height: Constant.twoThirds
    },
    AdImagesSliderLayout: {
        width: Constant.twoThirds,
        height: Constant.matchParent,
        backgroundColor: Constant.homePanelBackgroundColor,
        marginRight: Constant.homeBlock,
        marginBottom: Constant.homeBlock,
        overflow: 'hidden',
        borderRadius: Constant.homeRadius,
    },
    AdImage: {
        height: 163,
        borderRadius: Constant.homeRadius,
    },
    noticeLayout: {
        width: Constant.oneThird,
        height: Constant.matchParent,
        backgroundColor: Constant.homePanelBackgroundColor,
        marginLeft: Constant.homeBlock,
        marginBottom: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden',
        border: '1px solid #888888',
    },
    productSliderLayout: {
        width: Constant.twoThirds,
        height: Constant.matchParent - Constant.homeBlock * 2,
        backgroundColor: Constant.homePanelBackgroundColor,
        marginTop: Constant.homeBlock * 2,
        marginRight: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden',
        border: '1px solid #888888'
    },
    productPanel: {
        paddingLeft: 50,
        paddingRight: 50,
    },
    quicklyEnterPanelLayout: {
        width: Constant.oneThird,
        height: Constant.matchParent - Constant.homeBlock * 2,
        marginTop: Constant.homeBlock * 2,
        marginLeft: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden'
    },
    testStyle: {
        width: Constant.matchParent,
        height: Constant.matchParent,
        backgroundColor: 'blue'
    }

};

export default HomeView;
