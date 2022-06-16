import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createGlobalStyle } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('app'))
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
