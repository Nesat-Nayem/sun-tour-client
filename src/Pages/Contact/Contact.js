import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';


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
const Contact = () => {
  return (
    <Container id='contact' sx={{ my: 8 }}>
      <Grid container rowSpacing={3} columnSpacing={8}>
        <Grid item md={6} sx={{ margin: "auto" }}>
          <Typography sx={{ mb: 3 }} variant='h3'>Connect Us</Typography>
          <form style={{ width: "100%" }}>
            <TextField
              fullWidth
              label="Name"
              id="fullWidth"
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Subject"
              id="fullWidth"
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Message"
              id="fullWidth"
              sx={{ my: 1 }}
              multiline
              rows={4}
            />
            <Button style={styles.primary} type='submit' variant="contained">Send</Button>
          </form>
        </Grid>
        <Grid item md={6}>
          <img style={{ width: "100%" }} src="https://i.ibb.co/yXfYXgW/Young-business-woman-working-at-the-computer-in-cafe-on-the-rock-Young-girl-downshifter-working-at-a.jpg" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;