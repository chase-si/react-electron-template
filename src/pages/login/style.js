import styled from 'styled-components'

import { COLOR, rem } from '@/style'
import {
    loginFrame,
    loginBg,
    loginTitle,
    loginGlobe,
    loginLock,
    loginUser,
    loginSubmit,
    loginReset
} from '@/static/img/index'

export const LoginContainer = styled.div`
    height: 100vh;
    width: ${rem('1920px')};
    background-image: url(${loginBg});
    background-size: cover;

    .title {
        height: ${rem('65px')};
        width: ${rem('986px')};
        position: absolute;
        top: ${rem('165px')};
        left: ${rem('470px')};
        &::after {
            content: '便携式频谱传感器管理终端软件';
            color: ${COLOR.white};
            font-size: ${rem('56px')};
            font-weight: 600;
            padding-left: ${rem('100px')};
        }
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(${loginFrame});
        background-size: cover;
        height: ${rem('570px')};
        width: ${rem('1014px')};
        position: absolute;
        top: ${rem('206px')};
        left: ${rem('456px')};

        .globe {
            height: ${rem('190px')};
            width: ${rem('193px')};
            margin-top: ${rem('59px')};
            background-image: url(${loginGlobe});
            background-size: contain;
            background-repeat: no-repeat;
        }

        .button {
            display: flex;
            justify-content: space-between;
            width: ${rem('401px')};

            button {
                color: ${COLOR.white};
                background-color: unset;
                background-image: url(${loginReset});
                background-size: contain;
                background-repeat: no-repeat;
                height: ${rem('51px')};
                width: ${rem('181px')};
                margin-top: ${rem('15px')};
                border: none;
                cursor: pointer;
                font-size: ${rem('16px')};

                &:hover {
                    background-image: url(${loginSubmit});
                }
                &:after {
                    content: ' ';
                    background-image: url(${loginSubmit});
                    width: 0;
                    height: 0;
                }
            }
        }
    }
`

export const InputContainer = styled.div`
    height: ${rem('41px')};
    width: ${rem('401px')};
    border-width: ${rem('1px')};
    border-style: solid;
    border-color: ${props => (props.focus ? COLOR.lightGreen : COLOR.LoginInputWhite)};
    background: rgba(9, 15, 33, 0.54);
    border-radius: ${rem('6px')};
    font-size: ${rem('16px')};
    display: flex;
    align-items: center;
    margin: ${rem('15px')} 0;
    
    >.img {
        height: ${rem('16px')};
        width: ${rem('18px')};
        margin: 0 ${rem('16px')};
        background-image: url(${loginUser});
        background-size: contain;
        background-repeat: no-repeat;
    }

    :nth-child(3) {
        .img {
            background-image: url(${loginLock});
        }
    }

    >.input {
        width: 100%;
        color: ${COLOR.white};
    }
  
    input {
      flex-grow: 1;
      border: none;
      background: transparent;
      font-size: ${rem('16px')};
      color: ${COLOR.LoginTextWhite};
      
      &:focus {
        outline: none;
      }
      ::-webkit-input-placeholder {
        color: ${COLOR.white};
      }
    }
`
