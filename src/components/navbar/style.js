import styled from 'styled-components'

import {
    COLOR, rem, Z_INDEX, VAR
} from '@/style/index'

export const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background-size: cover;
    height: ${VAR.navbarHeight};
    background-color: #000;

    .navs-container {
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;

        .second-navs {
            display: flex;
            align-items: center;
            margin-right: auto;
            width: ${rem('464px')};
            padding-left: ${rem('66px')};
            color: ${COLOR.greyE5};
            font-size: ${rem('20px')};

            img {
                height: ${rem('28px')};
                width: ${rem('28px')};
                margin-right: ${rem('10px')};
            }
        }

        .title {
            color: ${COLOR.white};
            font-size: ${rem('28px')};
            align-self: center;
            text-align: center;
            width: ${rem('400px')};
            margin-right: ${rem('213px')};
            margin-top: ${rem('14px')};
        }
    }

    .menus {
        display: flex;
        height: ${VAR.pureNavbarHeight};
        flex-grow: 0;
        align-items: center;
        color: ${COLOR.white};
        font-size: ${rem('20px')};
        padding-right: ${rem('66px')};

        img {
            height: ${rem('28px')};
            width: ${rem('28px')};
            margin-right: ${rem('10px')};
        }

        .menu {
            height: ${VAR.navbarHeight};
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: ${rem('10px')};
            margin-right: ${rem('10px')};
            position: relative;
            color: ${COLOR.white};

            &::after {
                content: '';
                width: 2px;
                height: ${rem('26px')};
                background: ${COLOR.white};
                position: absolute;
                right: 0;
                top: ${rem('32px')};
            }

            &:last-of-type {
                &::after {
                    display: none;

                }
            }
        }
    }
`

// 二级菜单样式容器
export const Navs = styled.div`
    position: absolute;
    top: ${VAR.navbarHeight};
    width: ${rem('320px')};
    background: ${COLOR.scrollContainerBg};
    height: calc(100vh - ${VAR.navbarHeight});
    border-right: 1px solid #7D8493;
    box-shadow: 0 0 8px 0 #0B1E31;
    z-index: ${Z_INDEX.navIndex};
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: ${VAR.touchScollbarWidth};
    }
    
    ${props => (props.showNavList ? `
        left: 0;
        animation: slide 0.5s;
    ` : `
        left: ${rem('-320px')};
    `)}

    @keyframes slide {
        0% {
            left: ${rem('-320px')};
        }
        100% {
            left: 0;
        }
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${COLOR.white};
        font-size: ${rem('24px')};
        background: ${props => (props.active ? COLOR.buttonActiveBg : COLOR.buttonBg)};
        height: ${rem('89px')};
        margin-top: ${rem('6px')};

        &.active {
            background: ${COLOR.buttonActiveBg};
        }
    }
`
