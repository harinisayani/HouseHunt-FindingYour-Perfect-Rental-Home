import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav ,Button} from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { message } from 'antd';
const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    type: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!data?.name || !data?.email || !data?.password||! data?.type ) return alert("Please fill all fields");
    else {
      axios.post('http://localhost:8001/api/user/register', data)
        .then((response) => {
          if (response.data.success) {
            message.success(response.data.message);
            navigate('/login')

          } else {
            message.error(response.data.message)
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
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

      <Container component="main" >
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 28,
            marginRight: 28
          }}
          style={{
            padding:"2vw",
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            borderRadius:"10px"
          }}
        >
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Renter Full Name/Owner Name"
              name="name"
              value={data.name}
              onChange={handleChange}
              autoComplete="name"
              autoFocus
            />
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
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <br />
            <br />
            {/* <InputLabel id="demo-simple-select-label">User Type</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name='type'
              value={data.type}
              displayEmpty
              label="type"
              defaultValue="Select User"
              onChange={handleChange}
              style={{ width: '610px' }}
            >
              <MenuItem value="">User Type</MenuItem>
              <MenuItem value={'Select User'} disabled>Select User</MenuItem>
              <MenuItem value={"Renter"}>Renter</MenuItem>
              <MenuItem value={"Owner"}>Owner</MenuItem>
              <MenuItem value={"Admin"}>Admin</MenuItem>
              
            </Select>
            <Box mt={2}>
              <Button
                type="submit"
                variant="primary"
                style={{paddingLeft:"20vw",paddingRight:"20vw", paddingTop:"1vw",paddingBottom:"1vw"}}
              >
                Sign Up
              </Button>
            </Box>
            <br />
            <Grid container>
              <Grid item>Have an account?
                <Link style={{ color: "blue" }} to={'/login'} variant="body2" onSubmit={handleSubmit}>
                  {" Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Register
