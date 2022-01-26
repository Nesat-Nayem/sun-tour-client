import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAddedOrder, getSingleService } from '../../Redux/services/serviceAction';
// import useAuth from '../hooks/useAuth';
import useAuth from '../hooks/useAuth.js';

// import Navbar from '../Navbar/Navbar';
import AppBar from '../AppBar/AppBar';

const styles = {
    primary: {
      background: 'linear-gradient(45deg, #27b1fc 30%, #57e2ff 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: "auto",
      marginRight: "5px"
    },
  }

const BlogDetails = () => {

    const { serviceId } = useParams()
    const { user } = useAuth()
    const service = useSelector(state => state.services.service)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getSingleService(serviceId))
    }, [serviceId, dispatch])
  
    const [data, setData] = useState({})
  
  
    const getServiceData = (e) => {
      const value = e.target.value
      const property = e.target.name
      const newObj = { ...data }
      newObj[property] = value
      newObj.name = user.displayName
      newObj.email = user.email
      newObj.status = 'Pending'
      newObj.price = service.price
      newObj.serviceImg = service.img
      newObj.serviceName = service.name
      setData(newObj)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(getAddedOrder(data))
      e.target.reset()
    }


    return (
        <>
      {/* <Navbar /> */}
      <AppBar />

      <Container>
        <Box sx={{ padding: '100px 0' }}>
          <Grid container rowSpacing={1} columnSpacing={{ md: 2 }}>
            <Grid sx={{ margin: "auto" }} item md={6}>
              <img style={{ width: "100%" }} src={service.img} alt="" />
              <Typography variant='h4'>{service.name}</Typography>
              <Typography variant='p'>{service.desc}</Typography>
              <Typography variant='h6'>Price: ${service.price}</Typography>
            </Grid>
            <Grid sx={{ margin: "auto" }} item md={6}>
              <Typography variant='h4'>Book This Package Here</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="name"
                  id="fullWidth"
                  value={user.displayName || ''}
                  onChange={getServiceData}
                  name='name'
                  autoFocus
                  disabled
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Email"
                  id="fullWidth"
                  type='email'
                  value={user.email || ''}
                  onChange={getServiceData}
                  name='email'
                  autoFocus
                  disabled
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Phone Number"
                  id="fullWidth"
                  type='number'
                  onChange={getServiceData}
                  name='phone'
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Service Name"
                  value={service.name || ''}
                  id="fullWidth"
                  onChange={getServiceData}
                  name='serviceName'
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label="Address"
                  id="fullWidth"
                  onChange={getServiceData}
                  name='address'
                />
                <TextField
                  sx={{ my: 1 }}
                  fullWidth label=""
                  id="fullWidth"
                  type='date'
                  onChange={getServiceData}
                  name='date'
                />
                <Button style={styles.primary} type='submit' variant="contained">Confirm Order</Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
    );
};

export default BlogDetails;