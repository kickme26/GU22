import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Products from "./cart/cart.jsx";
/*import Counter from './counter/counter.jsx';*/
import Block from './block/block.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Block />
    <Products/>
  </React.StrictMode>,
)
