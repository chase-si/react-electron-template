import styled from 'styled-components'

import { COLOR, rem } from '@/style/index'

export const VirtualTableContainer = styled.div`
    font-size: ${rem('20px')};
    color: ${COLOR.white};
    border-radius: ${rem('4px')};
    overflow: hidden;

    .header {
        height: 40px;
        line-height: 40px;
        white-space: nowrap;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            width: 0;
            height: 0
        }
        
        .table-header {
            padding: 0 ${rem('16px')};
            background-color: ${COLOR.TableTitleBlue};
            font-weight: 500;
            text-align: left;
            display: inline-block;
            box-sizing: border-box;
        }
    }

    .table-cell {
        padding: 0 ${rem('16px')};
        overflow-wrap: break-word;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .even-cell {
        background-color: ${COLOR.bgTableEven};
    }

    .warning {
        background: ${COLOR.tableWarning};
    }

    .selected {
        background-color: ${COLOR.TableButtonActive}
    }
`
