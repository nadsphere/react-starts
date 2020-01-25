import '@babel/polyfill'
import React from 'react'
import ReactDom from 'react-dom'


const App = () => {
    ReactDom.render(
        <div>
            <h1>Sample React Application</h1>
            <p>left to rigth</p>
        </div>,
        document.getElementById('root'),
    )
}
App()
