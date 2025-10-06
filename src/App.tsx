import React from 'react'
import Logo from './Components/header/Logo'
import Nav from './Components/header/Nav'
import Body from './Components/Main/Body'
import Footer from './Components/footer/Footer'
import LastFooter from './Components/footer/LastFooter'
import Login from './Components/Main/Login'
// import Log2 from './Components/Main/Log2'


function App() {
  return (
    <div>
      
      <Logo/>
       {/* <Login/>  */}
      {/* <Log2/> */}
      <Nav/>
      <Body/>
      <Footer/>
      <hr className=' m-8 bg-gray-400'/>
      <LastFooter/>
    </div>
  )
}

export default App
