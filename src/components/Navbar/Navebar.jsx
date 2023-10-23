import React, { useState } from 'react'
import './Navebar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../../assets/images/logo1.png'

function Navebar() {

//change color after navbar scrooling
const [colorbg , setColorbg]= useState();
const changecolor = ()=>{
  if(window.scrollY>=90)
  {
    setColorbg(true);
  }
  else{
    setColorbg(false)
  }
}
window.addEventListener('scroll', changecolor);
    
// const [isHovering, setIsHovering] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };
  return (
    <>
     <Navbar bg=""  expand="lg"  className={colorbg ? 'hearder-bg': 'header'} >
        <Navbar.Brand href="" style={{paddingLeft:"0%",fontSize:"1.8rem",cursor:"pointer"}} id='ok'><a href="/"><img src={logo1} alt="" /></a></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='navbarr'>
            <Nav className="me-auto"></Nav>
              <Nav  className="me"> 
                <Nav.Link href=''><b className='bb'>Home</b> </Nav.Link>
                <Nav.Link href=''> <b className='bb'>Service</b> </Nav.Link>
                <Nav.Link href=''> <b className='bb'>About us</b> </Nav.Link>
                <Nav.Link href=''> <b className='bb'>Payment</b> </Nav.Link>
                <Nav.Link href=''> <b className='bb'>Testimonials</b> </Nav.Link>
                <Nav.Link href=''> <b className='bb'>Samples</b> </Nav.Link>
                <Nav.Link href=''> <b className='bb'>Estimation fee</b> </Nav.Link>
                <Nav.Link href=''> <b className='bb'>Contact us</b> </Nav.Link>
                <Nav.Link href=''  id='bb2'>Get Estimate</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navebar