import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import App from './App.jsx'
import Store from './redux/store/reduxStore.js'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persiststore } from './redux/store/reduxStore.js'


createRoot(document.getElementById('root')).render(
   <PersistGate loading={false} persistor={persiststore}>
 <Provider store={Store}>
    <App/>
 </Provider>
   </PersistGate>

)
