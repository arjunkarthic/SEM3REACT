import { Avatar, Button , TextField , Card ,CardMedia} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import './signup.css';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import project from './photo/project.jpg';
const Signup = (props) => {
    return(
        <div className='madhu1'>
          <div className='box1' >
          <Box sx={{height:'650px', width:'550px'}} color="Black" bgcolor="chocolate" p={1} width="12">
           <center>
           <Avatar sizes='500px' alt="Error" src={project} sx={{ width: 150, height: 80}}/>
            <h1>
              Sign Up
             </h1>
             <h2>
              Name : 
              <TextField
               helperText=" "
               id="demo-helper-text-aligned-no-helper"
               label="Name"
               variant="standard"/>
             </h2>
             <h2>
              Mobile no : 
              <TextField
               id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{ shrink: true, }}
              variant="standard"/>
             </h2>
            <h2>Email Id : 
            <TextField 
             type="email"
             placeholder="johndoe@email.com"
             label="Email"
             variant="standard"/></h2>
             <h2>Location : 
             <TextField
             type="location"
              label="Location"
             variant="standard"/>
             </h2>
            <h2>Password : 
            <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            variant="standard"/>
           </h2>
           <h2>Confirm Password : 
            <TextField
            name="password"
            type=" password"
            placeholder="Confirm password"
            label="Password"
            variant="standard"/>
           </h2>
           <button className='cld' >
            <Link to="/Login"><h3>Signup</h3></Link>
              </button>
              </center>
            </Box>
          </div>
         </div>
    )
}
export default Signup;