import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Grid, Card, CardContent } from "@mui/material";
import "swiper/css/effect-fade";
import Rating from "react-rating";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const element1 = (
    <FontAwesomeIcon icon={faStar} style={{ color: "#FF9529" }} />
  );
  const element2 = (
    <FontAwesomeIcon icon={faStar} style={{ color: "#FFDF00" }} />
  );

  useEffect(() => {
    fetch("https://rocky-thicket-50900.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container className="review-container">
      <Typography variant="h1" sx={{ lineHeight: "5px" }}>
        Our Client Say About Us
      </Typography>
      <Typography
        style={{ textAlign: "center", color: "gray", marginBottom: "50px" }}
      >
        Our hard work prop our client expreance.
      </Typography>

      <Grid container spacing={2} sx={{ lineHeight: "40px" }}>
        {reviews.slice(0, 3).map((review) => (
          <Grid item xs={12} md={4} key={review._id} className="review-card">
            <Card>
              <CardMedia
                sx={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  mx: "auto",
                  p: "1",
                }}
                component="img"
                image={review.img}
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center", p: "1" }}
                >
                  {review.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center", p: "1" }}
                >
                  {review.desc}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center", p: "1" }}
                >
                  <Rating
                    readonly
                    initialRating={review.rating}
                    fullSymbol={element1}
                    emptySymbol={element2}
                  ></Rating>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
