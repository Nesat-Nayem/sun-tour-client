import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAddedOrder, getSingleService } from '../../Redux/services/serviceAction';
import useAuth from '../hooks/useAuth';
import Navbar from '../Navbar/Navbar';


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


const ServiceDetails = () => {
  const { serviceId } = useParams()
  const { user } = useAuth()
  const service = useSelector(state => state.services.service)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleService(serviceId))
  }, [serviceId, dispatch])

  const [data, setData] = useState({})


 


  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ padding: '100px 0' }}>
          <Grid container rowSpacing={1} columnSpacing={{ md: 2 }}>
            <Grid sx={{ margin: "auto" }} item md={10}>
              <img style={{ width: "100%" }} src={service.img} alt="" />
              <Typography sx={{color:'green', marginTop:'10px'}} variant='h4'>{service.title}</Typography>

              <Typography sx={{textAlign:'right', marginBottom:'6px'}} variant='h5'>Poster: {service.name}</Typography>

              <Typography variant='p'>{service.desc}</Typography>
              <Typography sx={{marginTop:'10px'}} variant='h6'>Tour Cost: ${service.price}</Typography>

              <Typography sx={{marginTop:'10px', textAlign:'right'}} variant='h6'>Location: {service.location}</Typography>

              <Typography sx={{marginTop:'10px'}} variant='h6'>Date: {service.date}</Typography>

              <Typography sx={{marginTop:'10px', textAlign:'right'}} variant='h6'>Catagore: {service.catagory}</Typography>

            </Grid>
            {/* <Grid sx={{ margin: "auto" }} item md={6}>
              <Typography variant='h4'>Book This Package Here</Typography>
             
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ServiceDetails;