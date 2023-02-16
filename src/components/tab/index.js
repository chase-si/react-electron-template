import React from 'react'

import { combineClassName } from '@/utils/handleData'
import { TabContainer, Tab } from './style'

const Tabs = props => {
    const { tabList = [], tabWidth } = props

    return (
        <TabContainer {...props}>
            <div className="item">
                {tabList.map(tab => (
                    <Tab
                        className={combineClassName([
                            { c: tab.active, n: 'active' }
                        ])}
                        tabWidth={tabWidth}
                        key={tab.key || tab.text}
                        title={tab.title && tab.text}
                    >
                        <div className="text" onClick={tab.onClickEvent}>{tab.text}</div>
                        {tab.onCloseEvent && <div className="close" onClick={tab.onCloseEvent} />}
                    </Tab>
                ))}
            </div>
        </TabContainer>
    )
}

export default Tabs
