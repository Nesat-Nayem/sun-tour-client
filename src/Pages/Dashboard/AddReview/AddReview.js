import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAddedReview } from '../../../Redux/services/serviceAction';
import useAuth from '../../hooks/useAuth';
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

const AddReview = () => {
  const { user } = useAuth()
  const dispatch = useDispatch()

  const [data, setData] = useState({})
  const [success, setSuccess] = useState('');


  const getServiceData = (e) => {
    const value = e.target.value
    const property = e.target.name
    const newObj = { ...data }
    newObj[property] = value
    // newObj.name = user.displayName
    // newObj.email = user.email
    setData(newObj)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    dispatch(getAddedReview(data))
    e.target.reset()

  }
  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant='h4' >Add A Review</Typography>
      {
        success &&
        <Alert severity="success">{success}</Alert>
      }
      <form onSubmit={handleSubmit} style={{ width: "90%", maxWidth: "500px" }}>
        <TextField
          sx={{ my: 1 }}
          fullWidth label="name"
          id="fullWidth"
          value={user.displayName || ''}
          onChange={getServiceData}
          name='name'
          autoFocus

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

        />
        <TextField
          sx={{ my: 1 }}
          fullWidth label="Image URL"
          id="fullWidth"
          onChange={getServiceData}
          name='img'
        />
        <TextField
          sx={{ my: 1 }}
          fullWidth label="Rating"
          id="fullWidth"
          onChange={getServiceData}
          name='rating'
        />
        <TextField
          sx={{ my: 1 }}
          rows={4}
          multiline
          fullWidth
          label="Description"
          id="fullWidth"
          onChange={getServiceData}
          name='desc'
        />
        <Button style={styles.primary} type='submit' variant="contained">Add Review</Button>
      </form>
    </Box>
  );
};

export default AddReview;