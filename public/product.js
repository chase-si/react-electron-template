const path = require('path')
const express = require('express')
const appEx = express()

const exec = require('child_process')

const productEnvStart = async (port) => {
    let childProcess
    try {
        // start frontend
        const reactBuildPath = path.join(__dirname, '../build')
        appEx.use(express.static(reactBuildPath))
        appEx.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname, '../build/index.html'))
        })
        appEx.listen(port)
        console.log(`server is running at ${port} port`)

        // start backend
        // 判断后端否初始化
        const { Low, JSONFile } = await import('lowdb')
        const file = path.join(__dirname, 'db.json')
        const adapter = new JSONFile(file)
        const db = new Low(adapter)
        await db.read()
        const init = db.data.backendFirstInit
        const javaStartCmd = init
            ? ['-jar', 'device-sensor.jar', 'reset']
            : ['-jar', 'device-sensor.jar']
        if (init) {
            db.data.backendFirstInit = false
            await db.write()
        }

        // 子进程启动java
        const javaBuildPath = path.join(__dirname, '../build/backend')
        // 双屏路径
        // const java17Path = path.join(__dirname, '../../jdk-17.0.1/bin')
        // 单屏路径为
        const java17Path = path.join(__dirname, '../build/jdk-17.0.1/bin')
        childProcess = exec.spawn(
            `${java17Path}/java`,
            javaStartCmd,
            {
                cwd: javaBuildPath,
                env: {
                    detached: false
                }
            },
            (err, stdout, stderr) => {
                if (err) {
                    console.error('启动java失败', err)
                }
                console.log(stdout)
                console.log(stderr)
            }
        )
        return childProcess
    } catch (err) {
        console.log(err)
    }
}

module.exports = productEnvStart
