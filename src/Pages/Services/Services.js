import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { getLoadedService } from '../../Redux/services/serviceAction'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = useSelector(state => state.services.services)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLoadedService(services))
  }, [])
  return (
    <Container id='services'>
      <Typography sx={{ textAlign: "center", my: 5 }} variant='h3'>Our Services</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          services?.map(service => <Grid key={service._id} sx={{ margin: "auto" }} item md={4}>
            <Card sx={{ maxWidth: 345, }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={service.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.desc?.slice(0, 120)}
                </Typography>
                <Typography sx={{ fontWeight: "300", mt: 2 }} variant='h6'>
                  Price: ${service.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/services/${service._id}`}>
                  <Button size="small">More Details</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>)
        }
      </Grid>
    </Container>
  );
};

export default Services;