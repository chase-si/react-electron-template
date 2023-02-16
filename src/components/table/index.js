import React from 'react'
import { Table } from 'antd'

import { TableWrapper } from './style'

const RcTable = (props) => {
    const { pagination = false } = props

    return (
        <TableWrapper>
            <Table
                {...props}
                pagination={pagination}
            />
        </TableWrapper>
    )
}

export default RcTable
