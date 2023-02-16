import ReconnectingWebSocket from 'reconnecting-websocket'

const SOCKET_PATH = window.env ? window.env.REACT_APP_WS_URL : process.env.REACT_APP_WS_URL

// 全局长链的唯一socket
const cmdSocket = new ReconnectingWebSocket(`${SOCKET_PATH}/cmd`)

// 用于局部组件的新建立socket
const getNewSubSocket = () => new ReconnectingWebSocket(`${SOCKET_PATH}/live-play`)

export {
    cmdSocket,
    getNewSubSocket
}
