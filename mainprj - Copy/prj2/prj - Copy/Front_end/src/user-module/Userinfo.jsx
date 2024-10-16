import React from 'react'
import Navuser from './Navuser'
import { Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Userinfo = () => {
  const heading={fontSize:"2rem",fontWeight:"600"};
  const paperStyle={padding:"2rem",margin:"50px auto",borderRadius:"1rem",boxshadow:"10px 10px"}

  return (
    <div style={{ textAlign: "center" }}>

        <Navuser/>
        <br /><br /><br /><br />
        <Typography style={heading} >Profile</Typography>
        <br></br>
      <form>  
      <TextField type="text" label="Mobile Number or Email" variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="text" label="Firstname" variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="text" label="Lastname" variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="password" label="Password" variant="filled" sx={{width:"300px"}}/> <br /><br />
      
      
      </form>
    </div>
  )
}

export default Userinfo

