export const rem = (size) => {
    const defaultWidth = 1920
    return `${(parseInt(size, 10) / defaultWidth) * 100}vw`
}

// vw转回px, 传入带vw字符串, 传出带px的字符串
export const remReverse = (vwVal) => {
    const defaultWidth = 1920
    return `${(parseInt(vwVal) / 100) * defaultWidth}px`
}

export const COLOR = {
    white: '#FFFFFF',
    whileDim: 'rgba(255, 255, 255, 0.7)',
    bgWhite: '#F9F9F9',
    black: '#000000',

    bodyBgGray: '#E0E0E0',
    rowBgGray: '#EBEBEB',
    borderGray: '#d8d8d8',

    fontColor: '#333F42',

    deviceAvalible: '#40CE56',
    deviceAbnormal: '#4694FE',
    deviceBusy: '#E1D159',
    deviceOffline: '#7F7F7F'
}

export const Z_INDEX = {
    uiIndex: 99,
    tabIndex: 5,
    touchFormIndex: 6,
    modalIndex: 99,
    fullScreenChartIndex: 100,
    navIndex: 101
}

export const VAR = {
    navbarHeight: rem('83px'), // 包含顶header的高度
    navbarHeightBig: rem('119px'), // 包含顶header的高度
    headerHeight: rem('28px'),
    navListHeight: rem('55px'),
    mediaWidth: '1598px', // 4:3屏小车屏幕宽度
    touchScollbarWidth: rem('35px'), // 触屏版滚动条宽度
    touchClassName: 'touch-classname' // 触屏版特有className, 主要用于antd组件样式修改
}
