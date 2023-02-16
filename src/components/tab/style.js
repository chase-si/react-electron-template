import styled from 'styled-components'

import { COLOR, rem } from '../../style'
import { netTabBottom, netTabBottomActive, SearchClose } from '../../static/img'

export const TabContainer = styled.div`
    position: relative;

    .item {
        display: flex;

        &::after {
            content: "";
            height: 2px;
            width: 100%;
            background: linear-gradient(140deg, #1DD2E5 0%, #176A9B 47%, rgba(16, 45, 71, 0) 100%);
            position: absolute;
            bottom: 0;
            left: 0;
        }

    }
    
`

export const Tab = styled.div`
    width: ${props => (props.tabWidth ? props.tabWidth : rem('186px'))};
    height: ${rem('45px')};
    line-height: ${rem('45px')};
    text-align: center;
    padding: 0 ${rem('25px')} 0 ${rem('15px')};
    color: ${COLOR.TabInactiveColor};
    font-size: ${rem('20px')};
    position: relative;
    background: linear-gradient(180deg, #0B253F 0%, #0970B3 100%);
    box-shadow: ${rem('10px')} 0 ${rem('6px')} 0 rgba(0, 20, 36 .5);
    border: 1px solid #1DD2E5;
    margin-right: 1px;
    box-sizing: border-box;

    &::after {
        content: "";
        height: ${rem('7px')};
        width: ${rem('71px')};
        background-image: url(${netTabBottom});
        position: absolute;
        bottom: ${rem('3px')};
        left: ${rem('3px')};
    }

    &.active {
        color: ${COLOR.white};
        &::after {
            background-image: url(${netTabBottomActive});
        }

    }

    .text {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
            color: ${COLOR.white};
        }
    }

    .close {
        height: ${rem('18px')};
        width: ${rem('18px')};
        background-image: url(${SearchClose});
        background-size: cover;
        position: absolute;
        right: ${rem('5px')};
        top: ${rem('15px')};
        z-index: 1;
        opacity: 0.7;
        cursor: pointer;

        &:hover {
            box-shadow: ${rem('10px')} 0 ${rem('6px')} 0 rgba(0, 20, 36 .5);
            opacity: 1;
            transform: scale(1.2);
        }
    }
`
