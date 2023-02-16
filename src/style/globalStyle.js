import styled from 'styled-components'

import { COLOR, rem } from './index'
import { homeBackground } from '../static/img'

const fontSize = rem('16px')
const touchFontSize = rem('22px')

export const GlobalContainer = styled.div`
    overflow: hidden;

    &:after {
        content: ' ';
        background-image: url(${homeBackground});
        width: 0;
        height: 0;
    }

    .ant-radio-inner {
        background: none;
    }

    .ant-form-item-label > label {
        color: ${COLOR.white};
        font-size: ${fontSize};
        height: ${rem('32px')};
    }
    .ant-form label {
        font-size: ${fontSize};
    }

    .ant-form-item {
        margin-bottom: ${rem('24px')};
    }

    // input
    .ant-input {
        font-size: ${fontSize};
        background: transparent;
        color: ${COLOR.white};
        padding: ${rem('2px')} ${rem('11px')};
    }
    .ant-form-item-control-input {
        font-size: ${fontSize};
    }
    .ant-input-suffix {
        color: ${COLOR.white};
    }

    // 控件公共样式
    .ant-form-item-control-input-content {
        border-radius: 2px;
        background: none;
        border: none;

        input, textarea {
            background: ${COLOR.antInputBg};
            border: ${rem('1px')} solid ${COLOR.InputBorder};
            color: ${COLOR.white};
            padding: ${rem('2px')} ${rem('11px')};
        }
        .ant-radio-group .ant-radio-wrapper {
            color: ${COLOR.white};
        }
        .ant-picker {
            border: ${rem('1px')} solid ${COLOR.InputBorder};
            background: ${COLOR.antInputBg};
            padding-left: 0;
        }
        .ant-input-number-input-wrap input {
            height: ${rem('20px')};
            background: none;
            border: none;
            padding: 0;
        }
        .ant-input-disabled, .ant-input-number-disabled, .ant-picker-disabled {
            background: ${COLOR.antInputDisabledBg};
            color: ${COLOR.antInputDisabeldTxt};

            .ant-input-number-input {
                color: ${COLOR.antInputDisabeldTxt};
            }
        }
        .ant-radio-wrapper-disabled {
            color: red;
        }
    }

    .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input, 
    .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper, 
    .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover, 
    .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
        background-color: transparent;
    }

    .ant-input-affix-wrapper {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        font-size: ${fontSize};
        background: ${COLOR.antInputBg};
        border: ${rem('1px')} solid ${COLOR.InputBorder};
        &.touch-classname {
            font-size: ${touchFontSize};
            input {
                font-size: ${touchFontSize};
            }
        }
        input {
            background: none;
            border: none;
            color: ${COLOR.white};
            padding: ${rem('2px')} ${rem('11px')};
        }
        svg {
            fill: ${COLOR.svgFill};
        }
    }

    .ant-input-number-handler {
        color: red;
    }

    .ant-input-number-handler-up-inner, .ant-input-number-handler-down-inner {
        color: red;
    }

    // 数字input
    .ant-input-number-input-wrap {
        font-size: ${fontSize};
    }
    .ant-input-number-input {
        padding: 0 ${rem('11px')};
        height: ${rem('30px')}; 
    }
    .ant-input-number {
        background: ${COLOR.antInputBg};
        color: ${COLOR.white};
        padding: ${rem('2px')} ${rem('11px')};
        border: ${rem('1px')} solid ${COLOR.InputBorder};
    }

    .ant-form-item-has-error .ant-input-number, .ant-form-item-has-error .ant-picker {
        border-color: ${COLOR.deviceAbnormal};
    }
    .ant-form-item-control-input {
        min-height: ${rem('32px')};
    }
    .ant-input-number-handler-wrap {
        background: ${COLOR.antInputBg};
        svg {
            fill: ${COLOR.svgFill};
        }
    }

    .ant-select-single .ant-select-selector .ant-select-selection-item, .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
        line-height: ${rem('30px')};
        &.touch-classname {
            line-height: ${rem('42px')};
            height: ${rem('42px')};
        }
    }
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        padding: 0 ${rem('11px')};
        height: ${rem('30px')};
    }
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
        height: ${rem('30px')};
    }
    .ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
        background: ${COLOR.antInputDisabledBg};
        color: ${COLOR.antInputDisabeldTxt};
    }
    .ant-select-item {
        font-size: ${fontSize};
        line-height: ${rem('22px')};
    }
    .ant-select-dropdown {
        font-size: ${fontSize};
    }
    .ant-select .ant-select-selector {
        border-radius: 2px;
        background: ${COLOR.antInputBg};
        border: ${rem('1px')} solid ${COLOR.InputBorder};
        color: ${COLOR.white};
    }
    .ant-select-clear {
        background: transparent;
        svg {
            fill: ${COLOR.svgFill};
        }
    }
    .ant-picker {
        border: ${rem('1px')} solid ${COLOR.InputBorder};
        background: ${COLOR.antInputBg};
        input {
            color: ${COLOR.white};
        }
    }
    .ant-picker-clear {
        background: transparent;
        svg {
            fill: ${COLOR.svgFill};
        }
    }
    .ant-picker-suffix {
        svg {
            fill: ${COLOR.white};
        }
    }
    .ant-select-arrow {
        svg {
            fill: ${COLOR.white};
        }
    }

    // 控件选择、清除内容后样式
    .ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
        background-color: ${COLOR.antInputBg};
    }
    .ant-form-item-has-error .ant-input-number:not([disabled]):hover, .ant-form-item-has-error .ant-picker:not([disabled]):hover {
        background-color: ${COLOR.antInputBg};
    }
    .ant-form-item-has-error .ant-input, .ant-form-item-has-error .ant-input-affix-wrapper, .ant-form-item-has-error .ant-input:hover, .ant-form-item-has-error .ant-input-affix-wrapper:hover {
        background-color: ${COLOR.antInputBg};
    }

    // radio
    .ant-radio {
        font-size: ${fontSize};
    }
    .ant-radio-disabled {
        background: ${COLOR.antInputDisabledBg};
        color: ${COLOR.antInputDisabeldTxt};
        border-radius: 50%;
        opacity: .4;
        & + span {
            color: ${COLOR.antInputDisabeldTxt};
        }
        .ant-radio-inner {
            &:after {
                background-color: ${COLOR.lightGreen};
            }
        }
    }

    // timepicker 
    .ant-picker-input > input {
        font-size: ${fontSize};
        background: none;
        border: none;
    }
    .ant-picker {
        font-size: ${rem('14px')};
        padding: ${rem('4px')} ${rem('11px')};
        height: ${rem('32px')};
    }
    
    .ant-form-item, .ant-select {
        font-size: ${fontSize};
    }
    .ant-tree {
        font-size: ${fontSize};
    }
    .ant-checkbox-wrapper {
        font-size: ${fontSize};
    }

    .ant-pagination-options {
        background: ${COLOR.antInputBg};
        border: ${rem('1px')} solid ${COLOR.InputBorder};
        border-radius: 2px;
    }

    // 分页器
    .ant-pagination-total-text {
        height: ${rem('32px')};
        line-height: ${rem('30px')};
        color: ${COLOR.white};
    }
    .ant-pagination-item, .ant-pagination-item-link{
        width: ${rem('32px')};
        height: ${rem('32px')};
        color: ${COLOR.white};
        background-color: ${COLOR.TableItemLink};
        border-radius: ${rem('2px')};
        border: ${rem('1px')} solid rgba(255, 255, 255, 0.25);

        a {
            color: ${COLOR.white};
        }

        :hover {
            color: ${COLOR.white};
            background-color: ${COLOR.TableLinkHover};
            border: ${rem('2px')} solid rgba(9, 109, 217, 0.2);
        }
    }
    .ant-table-pagination.ant-pagination {
        margin: ${rem('16px')} 0;
    }
    .ant-pagination {
        font-size: ${rem('14px')};
    }
    .ant-pagination-prev, .ant-pagination-next, .ant-pagination-jump-prev, .ant-pagination-jump-next, .ant-pagination-item {
        min-width: ${rem('32px')};
        height: ${rem('32px')};
        line-height: ${rem('30px')};
    }
    .ant-pagination-prev, .ant-pagination-next, .ant-pagination-jump-prev, .ant-pagination-jump-next {
        overflow: hidden;
        a {
            position: relative;
            top: ${rem('-26px')};
        }
    }
    .ant-pagination-item-active {
        color: ${COLOR.white};
        background-color: ${COLOR.TableLinkHover};
        border: ${rem('2px')} solid rgba(9, 109, 217, 0.2);
    }

    //  列表复选框
    .ant-checkbox-inner {
        background: ${COLOR.antInputBg};
        border: ${rem('1px')} solid ${COLOR.InputBorder};
    }
    .ant-table-tbody > tr.ant-table-row-selected > td {
        background: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
        background: ${COLOR.CardDelete};
    }

    .ant-table-row-expand-icon {
        background: ${COLOR.antInputBg};
        border: ${rem('1px')} solid ${COLOR.InputBorder};
    }
    
    .ant-table-empty .ant-table-tbody > tr.ant-table-placeholder {
        color: ${COLOR.white};
    }

    // 地图样式调整
    // 放大缩小图标
    .ol-zoom-in, .ol-zoom-out {
        font-size: ${rem('42px')};
    }
`
