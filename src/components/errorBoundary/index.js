import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        })
    }

    handleClickBtn = () => {
        this.setState({
            error: null, errorInfo: null
        }, () => {
            window.location.replace('/')
        })
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                    <button type="button" onClick={this.handleClickBtn}>
                        回到首页
                    </button>
                </div>
            )
        }
        // Normally, just render children
        return this.props.children
    }
}

export default ErrorBoundary
