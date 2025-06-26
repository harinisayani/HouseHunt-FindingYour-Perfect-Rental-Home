import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import p1 from '../../images/p1.jpg'
// import p2 from '../../images/p2.jpg'
// import p3 from '../../images/p3.jpg'
// import p4 from '../../images/p4.jpg'
import p1 from '../../images/p1.jpg'
import p3 from '../../images/p3.jpg'
import p7 from '../../images/p7.jpg'
import p8 from '../../images/p8.jpg'
import AllPropertiesCards from '../user/AllPropertiesCards';


const Home = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
   };
   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
            <Container fluid>
               <Navbar.Brand><h2 style={{ color: '#F97316' }}><b>🏡 &nbsp;House Hunt</b></h2></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                  >
                  </Nav>
                  <Nav>
                     
                     
                      <Button variant="primary" size="lg" active>
                        <Link to={'/'} style={{color:"white",marginLeft:'2vw'}}>Home</Link> 
                     </Button>
                     &nbsp;&nbsp;&nbsp;
                     <Button variant="primary" size="lg" active>
                        <Link to={'/login'} style={{color:"white",marginLeft:'2vw'}}>Login</Link>
                     </Button>
                        &nbsp;&nbsp;&nbsp;
                      <Button variant="primary" size="lg" active>
                        <Link to={'/register'} style={{color:"white",marginLeft:'2vw'}}>Register</Link>
                     </Button>
                      &nbsp;&nbsp;&nbsp;
                     {/* <Link to={'/'}>Home</Link> */}
                     {/* <Link to={'/login'}>Login</Link>
                     <Link to={'/register'}>Register</Link> */}
                  </Nav>

               </Navbar.Collapse>
            </Container>
         </Navbar>


         <div className='home-body'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
               <Carousel.Item>
                  <img
                     src={p7}
                     alt="First slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     src={p8}
                     alt="Second slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     src={p1}
                     alt="Third slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     src={p3}
                     alt="Fourth slide"
                  />
               </Carousel.Item>
            </Carousel>
         </div>


         <div className='property-content'>
            <div className='text-center'>
               <h1 className='m-1 p-5' style={{color:"green"}}>All Properties that  you may look for</h1>
               <p style={{ fontSize: 20, fontWeight: 200 }}>Want to post your Property? &nbsp;&nbsp;<Link to={'/register'}><Button variant="primary" active>Register as Owner</Button></Link></p>
            </div>

            <Container>
               <AllPropertiesCards />
            </Container>
         </div>
      </>
   )
}

export default Home
