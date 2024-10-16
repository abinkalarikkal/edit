import React, { useState } from 'react';
import { Box, Grid, Typography, TextField } from "@mui/material"; 
import Navuser from './Navuser';
import Jobcard from '../components/Jobcard';
import SearchIcon from '@mui/icons-material/Search';

const Browsejobs = () => {
  const [filter, setFilter] = useState('');
  
  // Sample job listings; replace this with your actual job data.
  const jobListings = [
    { id: 1, title: 'Job Title' },
    { id: 2, title: 'Product Manager' },
    { id: 3, title: 'Data Scientist' },
    { id: 4, title: 'Web Developer' },
    { id: 5, title: 'Mobile Developer' },
    { id: 6, title: 'UI/UX Designer' },
    { id: 7, title: 'DevOps Engineer' },
    { id: 8, title: 'QA Tester' },
    { id: 9, title: 'System Analyst' }
  ];

  // Filter the job listings based on the filter input
  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <header>
        <Navuser />
        <br /><br /><br />
      </header>

      <main style={{ display: "flex", flexDirection: "row" }}>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            height: "100%",
            padding: "0.75rem",
            margin: "1.25rem 0 1.25rem 1.25rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
            minWidth: "25ch",
            minHeight: "10dvh"
          }}
        >
          <Typography><SearchIcon sx={{ fontSize: 35, color: '#000000' }} /></Typography>
          <TextField 
            variant="outlined"
            label="Filter by job title"
            fullWidth
            value={filter}
            onChange={(e) => setFilter(e.target.value)} // Update filter state
            sx={{ marginTop:  '0.25rem', width: 200 }}
          />
        </Box>
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
          <Grid container spacing={2}>
            {filteredJobs.map(job => (
              <Grid item xs={12} sm={6} md={4} key={job.id}> {/* Use job.id as key */}
                <Jobcard title={job.title} /> {/* Pass the job title as a prop */}
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default Browsejobs;

