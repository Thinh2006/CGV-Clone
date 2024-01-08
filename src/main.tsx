import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'components'
import {StyleProvider} from '@ant-design/cssinjs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { store } from 'store'
import { ConfigProvider } from 'antd'



ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ToastContainer position="top-center" />
        <GlobalStyle />
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#E71A0F",
                },
            }}
        />
        <StyleProvider hashPriority="high">
            <Provider store={store}>
                <App />
            </Provider>
        </StyleProvider>
    </BrowserRouter>
);
