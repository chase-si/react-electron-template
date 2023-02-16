import React from 'react'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/reset.css'

import ErrorBoundary from './components/errorBoundary'
import { GlobalContainer } from './style/globalStyle'
import store from './redux/store'
import AppRouter from './routers/appRouter'

const App = () => {
    return (
        <GlobalContainer>
            <ErrorBoundary>
                <Provider store={store}>
                    <ConfigProvider locale={zhCN}>
                        <AppRouter />
                    </ConfigProvider>
                </Provider>
            </ErrorBoundary>
        </GlobalContainer>
    )
}

export default App
