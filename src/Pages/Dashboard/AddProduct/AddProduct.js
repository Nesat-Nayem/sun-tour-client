import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAddedService } from "../../../Redux/services/serviceAction";
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

const AddProduct = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({});

  const getServiceData = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    const newObj = { ...data };
    newObj[property] = value;
    setData(newObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(getAddedService(data));
    e.target.reset();
  };

  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant="h4">
        Write A Post
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "90%", maxWidth: "500px" }}>
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Your Name"
          id="fullWidth"
          name="name"
          onChange={getServiceData}
          required
        />
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Post Title"
          id="fullWidth"
          name="title"
          onChange={getServiceData}
          required
        />
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Image Url"
          id="fullWidth"
          name="img"
          onChange={getServiceData}
          required
        />
        <TextField
          sx={{ my: 1 }}
          type="number"
          fullWidth
          label="Travel Cost"
          id="fullWidth"
          name="price"
          onChange={getServiceData}
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
          rows={4}
          multiline
          fullWidth
          label="Description"
          name="desc"
          id="fullWidth"
          onChange={getServiceData}
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
          Post
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
