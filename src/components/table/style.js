import styled from 'styled-components'

import { COLOR, rem, VAR } from '@/style/index'

// 适配任务列表表单的4:3
export const TableWrapper = styled.div`
    .ant-table {
        font-size:${rem('20px')};
        background: transparent;
    }

    .ant-table-thead .ant-table-cell {
        padding: 0 ${rem('12px')};
        color: ${COLOR.white};
        background-color: ${COLOR.TableTitleBlue};
    }

    .ant-table-tbody .ant-table-cell {
        padding: 0 ${rem('12px')};    
    }

    .ant-table-tbody  td.ant-table-cell-row-hover {
        background: transparent;
    }

    .ant-table-cell-scrollbar {
        box-shadow: none;
    }

    .ant-table .ant-table-expanded-row-fixed {
        padding: 0;
        margin: 0;
    }

    tr {
        color: ${COLOR.white};
        background-color: ${COLOR.bgTableOdd};
        :nth-child(2n) {
            /* color: ${COLOR.TableRowWhite}; */
            background-color: ${COLOR.bgTableEven};
        }
    }

    tr.alert-row {
        color: ${COLOR.chartLineRed};
    }

    .ant-table-thead > tr > th {
        border-style: none;
        height: ${rem('52px')};
    }

    .ant-table-tbody > tr > td {
        border-style:none;
        height: ${rem('52px')};
    }

    .ant-table-tbody > tr {
        &.click {
            td {
                background-color: ${COLOR.bgTableOddHover};
            }
        }

        &.warning {
            td {
                background: ${COLOR.tableWarning};
            }
        }

        &:nth-child(2n) {
            :hover {
                td {
                    background-color: ${COLOR.bgTableEvenHover};
                }
            }
            &.click {
                td {
                    background-color: ${COLOR.bgTableEvenHover};
                }
            }
        }

        :hover {
            td {
                background-color: ${COLOR.bgTableOddHover};
            }
        }

        &.selected {
            td {
                background-color: ${COLOR.TableButtonActive};
            }
        }
    }

    // pagination
    .ant-table-pagination.ant-pagination {
        margin: ${rem('16px')} 0;
    }
    .ant-pagination {
        font-size: ${rem('20px')};
    }
    .ant-pagination-prev, .ant-pagination-next, .ant-pagination-jump-prev, .ant-pagination-jump-next, .ant-pagination-item {
        min-width: ${rem('32px')};
        height: ${rem('32px')};
        line-height: ${rem('30px')};
    }

    @media (width:${VAR.mediaWidth}){
        .ant-table-body {
            max-height: 960px;
        }

        tr{
            height:3.8vh;
        }
    }
`
