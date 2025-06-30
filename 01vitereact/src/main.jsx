import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const user = "Think and Code";
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: "_blank" },
  'Click me to visit Google'
)


createRoot(document.getElementById('root')).render(
  reactElement
)
