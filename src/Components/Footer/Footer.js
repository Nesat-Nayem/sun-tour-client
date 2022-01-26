import React from 'react';
import { Box, Grid } from '@mui/material';

// import img from '../../images/footer.png'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
// import { banner1, banner2, banner3, banner4 } from '../Slider/Slider';
const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to right, rgba(39, 177, 252, 0.5), rgba(255, 143, 83, 0.5)), url("https://i.ibb.co/WFGVHVK/Rectangle-5-1.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "50px 0"
  },
}


const Footer = () => {
    return (
        <Box style={styles.paperContainer}>
        <Box className='custom-container'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="logo">
                <h1>Sun <span>Tour</span></h1>
                <p>This is powered by sun tour
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
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
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <h1 style={{ fontSize: "25px", fontWeight: "400" }}>Get In Touch</h1>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "18px", my: 2 }}>
                <AiOutlineMail style={{ fontSize: "20px" }} />
                sky@stars.com
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "18px", my: 2 }}>
                <AiFillPhone style={{ fontSize: "20px" }} />
                +880 1999999999
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "18px", my: 2 }}>
                <ImLocation2 style={{ fontSize: "20px" }} />
                Rangpur, Bangladesh
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <h1 style={{ fontSize: "25px", fontWeight: "400" }}>Gallery</h1>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                <img style={{ width: "47%" }} src="https://i.ibb.co/WFGVHVK/Rectangle-5-1.png" alt="" />
                <img style={{ width: "47%" }} src="https://i.ibb.co/WFGVHVK/Rectangle-5-1.png" alt="" />
                <img style={{ width: "47%" }} src="https://i.ibb.co/WFGVHVK/Rectangle-5-1.png" alt="" />
                <img style={{ width: "47%" }} src="https://i.ibb.co/WFGVHVK/Rectangle-5-1.png" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
};

export default Footer;