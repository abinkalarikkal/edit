import React from 'react'

import { Box, Grid2, Typography } from "@mui/material";
import Navuser from './Navuser';
import Jobcard from '../components/Jobcard';

const Appliedjob = () => {
 



      var cardSize = 4;
      return (
        <>
        
          <header>
           <Navuser/>
           <br /><br/> <br />
          </header>
          
    
          <main style={{ display: "flex", flexDirection: "row" }}>
            {/* <Box 
              component="div"
              sx={{
                flexGrow: 1,
                height: "100%",
                padding: "0.75rem",
                margin: "1.25 rem 0 1.25rem 1.25rem",
                border: "1px solid black",
                borderRadius: "0.5rem",
                minWidth: "33ch",
                minHeight: "80dvh"
              }}
            >
              <Typography variant="h5">Job filters</Typography>
            </Box> */}
            <Box
              component="div"
              sx={{
                display: "flex",
                flexGrow: 1,
                height: "100%",
                padding: "1rem",
                mt: "0.25rem",
              }}
            >
              <Grid2 container spacing={2}>
                <Grid2 size={cardSize}>
                  <Jobcard/>
                </Grid2>
                <Grid2 size={cardSize}>
                  <Jobcard />
                </Grid2>
                <Grid2 size={cardSize}>
                  <Jobcard />
                </Grid2>
                <Grid2 size={cardSize}>
                  <Jobcard />
                </Grid2>
                <Grid2 size={cardSize}>
                  <Jobcard />
                </Grid2>
                <Grid2 size={cardSize}>
                  <Jobcard />
                </Grid2>
                <Grid2 size={cardSize}>
                  <Jobcard />
                </Grid2>
                <Grid2 size={cardSize}>
                  <Jobcard />
                </Grid2>
                <Grid2 size={cardSize}>
                  <Jobcard />
                </Grid2>
              </Grid2>
            </Box>
          </main>
        </>
      );
    };
    
    

export default Appliedjob

