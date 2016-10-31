import Dimensions from '../utilities/Dimensions';

const tabWidth = 188;
const titleHeight = 60;

export default {
    defaultTabWidth: tabWidth,
    defaultHomeWidth: Dimensions.width - tabWidth,
    defaultHomeHeight: Dimensions.height,
    screenWidth: Dimensions.width,
    screenHeight: Dimensions.height,
    contentHeight: Dimensions.height - titleHeight,
    defaultButtonWidth: 480,
    titleHeight: titleHeight,
    headerHeight: 60,
    tabLogoWH: 122,
    defaultFontSize: 16,
    smallFontSize: 14,
    largeFontSize: 18,
    fontSize13: 13,
    fontSize12: 12,
    fontSize11: 11,
    lightFontColor: 'white',
    tabSelectedColor: '#1177db',
    tabHeaderColor: '#004892',
    primaryColor: '#0096ef',
    titleBackgroundColor: '#00a2e3',
    orangeColor: '#ff6e01',
    squareWH: 80,
    matchParent: '100%',
    inputTypes: {
        editView: 'editView',
        textView: 'textView',
        textViewOnly: 'textViewOnly',
    }
};
