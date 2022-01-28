import { Box, Grid } from '@mui/material';
import React from 'react';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'

const styles = {
  paperContainer: {
    backgroundColor:"#F999B7",
    padding: "50px 0"
  },
}
const Footer = () => {
  return (
    <Box style={styles.paperContainer}>
      <Box className='custom-container'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="logo">
              <h1>Sun Tour</h1>
              <p>Sun Tour is and organized travel agency
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <h1 style={{ fontSize: "25px", fontWeight: "400" }}>Quick Link</h1>
            <ul>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Home</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Service</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">About</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Blogs</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Privecy & Policy</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Terms & Service</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <h1 style={{ fontSize: "25px", fontWeight: "400" }}>Get In Touch</h1>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "18px", my: 2 }}>
              <AiOutlineMail style={{ fontSize: "20px" }} />
              sun@tour.com
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "18px", my: 2 }}>
              <AiFillPhone style={{ fontSize: "20px" }} />
              +999999999999
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "18px", my: 2 }}>
              <ImLocation2 style={{ fontSize: "20px" }} />
              London, Uk
            </Box>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3} lg={3}>
            <h1 style={{ fontSize: "25px", fontWeight: "400" }}>Gallery</h1>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              <img style={{ width: "47%" }} src="" alt="" />
              <img style={{ width: "47%" }} src="" alt="" />
              <img style={{ width: "47%" }} src="" alt="" />
              <img style={{ width: "47%" }} src="" alt="" />
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;