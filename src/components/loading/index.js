import React from 'react'
import { LoadingContainer } from './style'

const RCLoading = (props) => (
    <LoadingContainer>
        <div className="loading-center">
            <div className="lds-ring">
                <div />
                <div />
                <div />
            </div>
            <div className="text">
                {props.text || '加载中...'}
            </div>
        </div>
    </LoadingContainer>
)

export default RCLoading
