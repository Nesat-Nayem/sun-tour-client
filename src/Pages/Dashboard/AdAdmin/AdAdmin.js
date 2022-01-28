import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AdAdmin = () => {
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

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAddAdmin = (e) => {
    const user = { email };
    fetch("https://rocky-thicket-50900.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccess(true);
      });
    e.preventDefault();
  };

  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant="h4">
        Add An Admin
      </Typography>

      <div style={{ textAlign: "center" }}>
        {success && <Alert severity="success">create admin successful</Alert>}
      </div>
      <form
        onSubmit={handleAddAdmin}
        style={{ width: "90%", maxWidth: "500px" }}
      >
        <TextField
          sx={{ my: 1 }}
          onBlur={handleOnBlur}
          type="email"
          multiline
          fullWidth
          label="email"
          name="email"
          id="fullWidth"
          required
        />
        <Button style={styles.primary} type="submit" variant="contained">
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AdAdmin;
