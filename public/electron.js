/* eslint-disable import/no-extraneous-dependencies */
const {
    app, BrowserWindow, ipcMain, dialog
} = require('electron')
const isDev = require('electron-is-dev')

const productStart = require('./product')

let childProcess
let mainWindow
const additionalData = { myKey: 'device-sensor' }
const gotTheLock = app.requestSingleInstanceLock(additionalData)

const createWindow = () => {
    mainWindow = new BrowserWindow({
        fullscreenable: true,
        height: 960,
        width: 1280,
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            preload: `${__dirname}/preload.js`
        },
        // transparent: true,
        // frame: false,
        titleBarStyle: 'default',
        autoHideMenuBar: true,
        title: '22s',
        maximizable: true,
        resizable: true,
        backgroundColor: '#0C1827',
        show: false
    })

    try {        
        if (!isDev) {
            const productPort = 8013
            childProcess = productStart(8013)
            mainWindow.loadURL(`http://localhost:${productPort}`)
        } else {
            mainWindow.loadURL('http://localhost:3001')
        }
    } catch (error) {
        console.log('error happened when start frontend', error)
    }


    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
    })


    mainWindow.webContents.session.on('will-download', (e, i, wc) => {
        i.once('done', (event, state) => {
            if (state === 'completed') {
                const filePath = event.sender.getSavePath()
                mainWindow.webContents.send('send-download-path', filePath)
            }
        })
    })

    ipcMain.on('open-dialog', (event, param) => {
        dialog.showOpenDialog({
            properties: ['openDirectory'],
            ...param
        }).then((files) => {
            // eslint-disable-next-line no-param-reassign
            event.returnValue = files
        })
    })
}

if (!gotTheLock) {
    console.log('prevent second instance open')
    app.quit()
} else {
    app.whenReady().then(createWindow)

    app.on('window-all-closed', () => {
        console.log('close app')
        if (childProcess) {
            childProcess.then(item => {
                if (item.kill) {
                    console.log('close java childProcess')
                    item.kill()
                }
            })
        }
        if (process.platform !== 'darwin') {
            console.log('app quit')
            app.quit()
        }
        process?.exit()
    })

    app.on('second-instance', (e, c, w, a) => {
        console.log('second-instance try to open')
        if (mainWindow) {
            if (mainWindow.isMinimized()) {
                mainWindow.restore()
            }
            mainWindow.focus()
        }
    })

}

