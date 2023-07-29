import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3" }} position="sticky">
        <Toolbar>
          <NavLink  to="/" style={{ color: "white" , textDecoration:"none" }}>
  
            <Typography marginLeft={5} sx={{ fontFamily: "fantasy" ,  }} variant="h4" >
              myBOOKSTORE
            </Typography>
          
          </NavLink>
          
          <Tabs
            sx={{ ml: "auto" }}
            textColor="white"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            <Tab LinkComponent={NavLink} to="/contacts" label="Contact Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;