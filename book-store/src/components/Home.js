import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div  >
      <Box display="flex" flexDirection="column" alignItems="center" >
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "purple" , borderRadius: 20 , padding:5 }}
          variant="contained"
        >
          <Typography variant="h3">CHECK OUT YOUR BOOKS HERE!</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;