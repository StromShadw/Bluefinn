import {  } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header/>
    <div className='business-entities'>
      <img className='logo' src="./logo.png" alt="LOGO" />
      <a className='title' href="#">Business Entities</a>
      <h5 className='total'>98</h5>
    </div>
    </>
  )
}

export default App
