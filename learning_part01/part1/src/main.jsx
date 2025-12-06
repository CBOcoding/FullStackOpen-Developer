// initial stage:

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// modified in:

import ReactDOM from 'react-dom/client'

import App from './App'

// The following command line renders its contents into the div-element,
// defined in the file index.html, having the id value 'root'.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

