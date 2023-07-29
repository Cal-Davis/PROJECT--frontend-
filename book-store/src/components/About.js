import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "san-serif" }} variant="h4" margin={10}>
          Thinking of storing your favorite books but don't have any clue on how to do it ? ... this is the place for you <br/>
        </Typography>
        <Typography sx={{ fontFamily: "monspace" }} variant="h3">
         <b>By Caldavis Wangaruro</b> <br/>
                 </Typography>
      </Box>
    </div>
  );
};

export default About;