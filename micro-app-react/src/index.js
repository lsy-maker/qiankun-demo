import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './micro/public-path'
import {BrowserRouter as Router} from 'react-router-dom'

function renderFn () {
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
    ,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log('react=======', window)
if (!window.__POWERED_BY_QIANKUN__) {
  renderFn()
}

export async function bootstrap () {
  console.log('microReactApp boostrap')
}

export async function mount (props) {
  renderFn(props)
  console.log('microReactApp mounted')
}

export async function unmount () {
  console.log('microReactApp unmount')
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
