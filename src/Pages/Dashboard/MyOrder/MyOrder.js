import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { getAddedOrder } from "../../../Redux/services/serviceAction";

const styles = {
  primary: {
    background: "linear-gradient(45deg, #27b1fc 30%, #57e2ff 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "auto",
    marginRight: "5px",
  },
};

const MyOrder = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const service = useSelector((state) => state.services.service);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAddedOrder(data));
    e.target.reset();
  };

  const getServiceData = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    const newObj = { ...data };
    newObj[property] = value;
    newObj.status = "Pending";
    setData(newObj);
    // newObj.name = user.displayName
    // newObj.email = user.email
   
    // newObj.price = service.price;
    // newObj.serviceImg = service.img;
    // newObj.serviceName = service.name;
   
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Your Name"
          id="fullWidth"
          // value={user.displayName || ''}
          onChange={getServiceData}
          name="name"
          autoFocus
          required
        />
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Post Title"
          id="fullWidth"
          // type='tytle'
          // value={user.email || ''}
          onChange={getServiceData}
          name="title"
          autoFocus
          required
        />
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Image Url"
          id="fullWidth"
          // type='number'
          name="img"
          onChange={getServiceData}
         
          required
        />
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Travel Cost"
          // value={service.name || ''}
          id="fullWidth"
          type="Number"
          onChange={getServiceData}
          name="price"
          required
        />
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Location"
          id="fullWidth"
          onChange={getServiceData}
          name="location"
          required
        />
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Description"
          id="fullWidth"
          onChange={getServiceData}
          name="desc"
          required
        />

        <TextField
          sx={{ my: 1 }}
          fullWidth
          label=""
          id="fullWidth"
          type="date"
          onChange={getServiceData}
          name="date"
        />

        {/* costom */}

        <InputLabel id="demo-simple-select-autowidth-label">
          Catagore
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          // value={age}
          name="category"
          onChange={getServiceData}
          autoWidth
          sx={{ my: 1 }}
          rows={4}
          multiline
          fullWidth
          label="Category"
        >
          <MenuItem value={"new"}>New</MenuItem>
          <MenuItem value={"trending"}>Trending</MenuItem>
          <MenuItem value={"cool"}>Cool</MenuItem>
        </Select>

        {/* costom */}

        <Button style={styles.primary} type="submit" variant="contained">
          Confirm Order
        </Button>
      </form>
    </div>
  );
};

export default MyOrder;
