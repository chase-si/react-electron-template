// 此文件下放置通用的数据, 格式处理函数

/**
 * 根据object的 value 获取 key
 */
export const getKeyByValueInObj = (obj, targetVal) => {
    if (targetVal) {
        const target = Object.entries(obj).find(([_, value]) => value === targetVal)
        if (target) {
            return target[0]
        }
    }
    return ''
}

// 根据key获取value
export const getValueByKeyInObj = (obj, targetVal) => {
    if (targetVal) {
        const target = Object.entries(obj).find(([key, _]) => key === targetVal)
        if (target) {
            return target[1]
        }
    }
    return ''
}

export const filterEmptyStringParam = params => {
    const newParams = Object.entries(params).filter(([_, val]) => val !== '')
    return newParams.reduce((prev, next) => ({ ...prev, [next[0]]: next[1] }), {})
}

export const filterNullAndUndefinedVal = obj => {
    if (typeof obj !== 'object') {
        return obj
    }
    return Object.entries(obj)
        .filter(([_, val]) => (val !== null) && (val !== undefined))
        .reduce((prev, next) => ({ ...prev, [next[0]]: next[1] }), {})
}

/**
 * @param {*} arr = ["tabs", {c: a===1, n: "active"}]
 * @returns 'tabs active' or 'tabs'
 */
export const combineClassName = (arr) => {
    // arr = ["tabs", {c: a===1, n: "active"}]
    return arr.map(item => {
        if (typeof (item) === 'string') {
            return item
        }
        if (item?.c) {
            return item?.n
        }
        return null
    }).filter(item => !!item).join(' ')
}

/**
 * @param {*} param = {
 *  node_id: xxx, ...,
 *  children: [{node_id: yyy, ...}]
 * }
 * @returns [{node_id: xxx, ...}, {node_id: yyy, ...}]
 */
export const flattenFunc = param => {
    const arr = []
    const loop = ({ children, ...item }) => {
        arr.push(item)
        if (children) {
            for (let index = 0; index < children.length; index += 1) {
                loop(children[index])
            }
        }
    }
    loop(param)
    return arr
}

/**
 * 将number缩小10的n次方倍, 并保留dight位小数, number可以为数字或者字符串
 * @param
 * return string
 */
export const numberToDotString = (number, n, digit) => {
    const num = parseFloat(number)
    if (typeof num !== 'number'
        || typeof n !== 'number'
        || typeof digit !== 'number'
    ) {
        return console.error('传入的内容格式有问题!')
    }

    return parseFloat(num / (10 ** n)).toFixed(digit)
}

// 深度合并obj
export const deepMergeObj = (objA, objB) => {
    const newObj = {}
    const keys = { ...objA, ...objB }

    Object.getOwnPropertyNames(keys).forEach(key => {
        if (Object.isExtensible(objA[key])
            && Object.isExtensible(objB[key])) {
            // 对象合并继续拷贝合并
            newObj[key] = deepMergeObj(objA[key], objB[key])
        // eslint-disable-next-line no-prototype-builtins
        } else if (objB?.hasOwnProperty(key)) {
            newObj[key] = objB[key]
        } else {
            newObj[key] = objA[key]
        }
    })
    return newObj
}

const numAddPreZero = (num) => {
    return num > 9 ? num : `0${num}`
}

// 时间格式转化
// [22, 4, 28, 14, 8, 24, 510, 0, 0] => '2022/4/28 14:8:24.510'
export const timeFormat = (timeArr) => {
    return `${2000 + timeArr[0]}/${timeArr[1]}/${numAddPreZero(timeArr[2])} ${numAddPreZero(timeArr[3])}:${numAddPreZero(timeArr[4])}:${numAddPreZero(timeArr[5])}.${timeArr[6]}`
}

// 用于创建a连接触发下载
export const download = (downloadUrl) => {
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = downloadUrl
    link.setAttribute('download', '实时报告.doc')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
