import { Box, Typography } from "@mui/material";
import React from "react";

const Contacts = () => {

    return (
        <div>
          <Box display="flex" flexDirection="column" alignItems="left" justifyContent="">
            <Typography sx={{ fontFamily: "san-serif" }} variant="h4">
              This is a MERN-STACK application <br/>
               <br/>
            </Typography>
            <Typography sx={{ fontFamily: "san-serif" }} variant="h5">
                If you have any concerns on this app , feel free to reach me 
                through the handles below 😀: 
                <hr/><br/>
                <br/>
               <br/>
               <br/>    

                <h3>@caldaviswangaruro@gmail.com</h3><br/>    <br/>    <br/>    
                <a href="www.instagram.com/cal_d.e.e"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="cal_d.e.e" title="instagram" width = "30" height={30} /></a><p> @cal_d.e.e</p><br/>
                <a href="www.twitter.com"><img src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" alt=" cal_d.e.e" title="twitter" width="30" height="30"/></a> <p>@caldaviss</p>
              
                
              
            </Typography>
          </Box>
          {/* <img src="" > */}
        </div>
      ) 
    
}

export default Contacts