import React, {
    useEffect, useMemo, useRef, useState
} from 'react'
import { VariableSizeGrid as Grid } from 'react-window'

import { combineClassName } from '@/utils/handleData'
import { VirtualTableContainer } from './style'

const renderCell = (
    datas,
    columns,
    onRowClick = () => {},
    { columnIndex, rowIndex, style }
) => {
    const columnItem = columns[columnIndex]
    let cellContext
    const rowClass = datas[rowIndex]?.rowClass

    if (datas.length > 0) { // render rows
        cellContext = datas[rowIndex][columnItem.dataIndex]
        if (columnItem.render) {
            cellContext = columnItem.render(cellContext)
        }
    }

    return (
        <div
            className={
                combineClassName([
                    'table-cell',
                    { c: rowIndex % 2, n: 'even-cell' },
                    { c: !!rowClass, n: rowClass }
                ])
            }
            onClick={() => onRowClick(datas[rowIndex])}
            style={style}
        >
            {cellContext}
        </div>
    )
}

const FixedHeader = (props) => {
    const headDom = useRef()
    const { columns, containerWidth, scrollLeft } = props

    useEffect(() => {
        if (headDom.current) {
            headDom.current.scrollLeft = scrollLeft
        }
    }, [scrollLeft])

    return (
        <div
            className="header"
            ref={headDom}
            style={{
                width: containerWidth
            }}
        >
            {columns?.map((item, idx) => (
                <div
                    key={idx}
                    className="table-header"
                    style={{
                        width: getWidth(item.width)
                    }}
                >
                    {item?.title}
                </div>
            ))}
        </div>
    )
}

const getWidth = (width) => {
    if (width) {
        return parseInt(width)
    }
    return 200
}

/**
 * 接受参数 dataSource = []
 * columns 同table COLUMNS定义, 但是width项为必填且为数字, 如不填则默认为200px
 * height table整体高度， number， 会渲染成px
 * onRowClick 每行点击事件
 */
const RcVirtualTable = ({
    dataSource, columns, height, onRowClick
}) => {
    const thisDom = useRef()
    const [width, setWidth] = useState(1000)
    const [scrollLeft, setScrollLeft] = useState(0)

    useEffect(() => {
        setWidth(thisDom.current.offsetWidth)
    }, [])

    const handleScroll = e => {
        setScrollLeft(e?.scrollLeft || 0)
    }

    return useMemo(() => (
        <VirtualTableContainer ref={thisDom}>
            <FixedHeader
                columns={columns}
                containerWidth={width}
                scrollLeft={scrollLeft}
            />
            <Grid
                onScroll={handleScroll}
                columnCount={columns.length}
                columnWidth={(index) => getWidth(columns[index]?.width)}
                height={(height || 320) - 40}
                rowCount={dataSource.length}
                rowHeight={() => 40}
                width={width}
            >
                {({ columnIndex, rowIndex, style }) => renderCell(
                    dataSource,
                    columns,
                    onRowClick,
                    { columnIndex, rowIndex, style }
                )}
            </Grid>
        </VirtualTableContainer>
    ), [dataSource, width, scrollLeft])
}

export default RcVirtualTable
