import React, { useState } from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const ForgotPassword = () => {
   const navigate = useNavigate()
   const [data, setData] = useState({
      email: '',
      password: '',
      confirmPassword: ''
   })

   const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (data.email === "" || data.password === "" || data.confirmPassword === "") {
         alert("Please fill all fields")
      } else {
         if (data.password === data.confirmPassword) {
            await axios.post("http://localhost:8001/api/user/forgotpassword", data)
               .then((res) => {
                  if (res.data.success) {
                     alert('Your password has been changed!')
                     navigate('/login')
                  } else {
                     alert(res.data.message)
                  }
               })
               .catch((err) => {
                  if (err.response && err.response.status === 401) {
                     alert("User doesn't exist");
                  }
                  navigate("/register");
               });
         }

      }


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
                        <Link to={'/'} style={{ color: "white", marginLeft: '2vw' }}>Home</Link>
                     </Button>
                     &nbsp;&nbsp;&nbsp;
                     <Button variant="primary" size="lg" active>
                        <Link to={'/login'} style={{ color: "white", marginLeft: '2vw' }}>Login</Link>
                     </Button>
                     &nbsp;&nbsp;&nbsp;
                     <Button variant="primary" size="lg" active>
                        <Link to={'/register'} style={{ color: "white", marginLeft: '2vw' }}>Register</Link>
                     </Button>
                     &nbsp;&nbsp;&nbsp;
                     {/* <Link to={'/'}>Home</Link> */}
                     {/* <Link to={'/login'}>Login</Link>
                     <Link to={'/register'}>Register</Link> */}
                  </Nav>

               </Navbar.Collapse>
            </Container>
         </Navbar>

         <Container component="main" maxWidth="xs">
            <Box
               sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: 28,
                  marginRight: 28
               }}
               style={{
                  padding: "2vw",
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  borderRadius: "10px"
               }}
            >
               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Forgot Password?
               </Typography>
               <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                     margin="normal"
                     fullWidth
                     id="email"
                     label="Email Address"
                     name="email"
                     value={data.email}
                     onChange={handleChange}
                     autoComplete="email"
                     autoFocus
                  />
                  <TextField
                     margin="normal"
                     fullWidth
                     name="password"
                     value={data.password}
                     onChange={handleChange}
                     label="New Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                  />
                  <TextField
                     margin="normal"
                     fullWidth
                     name="confirmPassword"
                     value={data.confirmPassword}
                     onChange={handleChange}
                     label="Confirm Password"
                     type="password"
                     id="confirmPassword"
                     autoComplete="current-password"
                  />
                  <Box mt={2}>
                     <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        // sx={{ mt: 3, mb: 2 }}
                        style={{paddingLeft:"16.7vw",paddingRight:"16vw", paddingTop:"1vw",paddingBottom:"1vw"}}
                     >
                        Change Password
                     </Button>
                  </Box>
                  <br />
                  <Grid container>
                     <Grid item>
                     </Grid>
                     <Grid item>Don't have an account?
                        <Link style={{ color: "red" }} to={'/register'} variant="body2">
                           {" Sign Up"}
                        </Link>
                     </Grid>

                  </Grid>
               </Box>
            </Box>
         </Container>
      </>
   )
}

export default ForgotPassword
