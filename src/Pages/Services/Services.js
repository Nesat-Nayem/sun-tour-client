import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, Pagination, Stack } from "@mui/material";
import "./Services.css";
import { Link } from "react-router-dom";
import { Box, typography } from "@mui/system";

const Services = () => {

  const [posts, setPosts] = useState([])
  
  const [page, setPage] = useState(0);
  const [numberCount, setNumber] = useState(0);
  
  const size = 10;
  useEffect(() => {
    fetch(`http://localhost:5000/service?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.post)
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setNumber(pageNumber);
      });
  },[page]);
 
  return (
    <Container id="services">
      <Typography sx={{ textAlign: "center", my: 5 }} variant="h3">
        Popular Posts
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {posts?.map((service) => (
        // {services?.map((service) => (

          <Grid key={service._id} sx={{ margin: "auto" }} item md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={service.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.desc?.slice(0, 120)}
                </Typography>
                <Typography sx={{ fontWeight: "300", mt: 2 }} variant="h6">
                  Location: {service.location}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/services/${service._id}`}>
                  <Button size="small">More Details</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box className="pagination">
        {[...Array(numberCount).keys()].map((number) => (
          <button
            className={number === page ? "selected" : ""}
            key={number}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </Box>
    </Container>
  );
};

export default Services;
