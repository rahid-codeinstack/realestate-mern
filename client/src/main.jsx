import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import App from './App.jsx'
import Store from './redux/store/reduxStore.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
 <Provider store={Store}>
    <App/>
 </Provider>
)
