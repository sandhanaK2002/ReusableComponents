import React from "react"
import ReactDom from "react-dom/client"
import {Provider} from "react-redux"
import {store} from "./store"

import "./index.css"


import App from "./App";


const El = document.getElementById("root");
const root =  ReactDom.createRoot(El)

root.render(
            <Provider store={store}>
                <App/>
            </Provider>
)
