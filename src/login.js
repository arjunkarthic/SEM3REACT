import { Avatar, Button , TextField , Card ,CardMedia} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import project from './photo/project.jpg';
const Login = (props) => {
    return(
        <div className='madhu1'>
          <div className='box1'>
          <Box sx={{height:'500px', width:'500px'}} color="Black" bgcolor="chocolate" p={1} width="12" padding-top="700px">
           <center>
           <Avatar sizes='500px' alt="Error" src={project} sx={{ width: 150, height: 80}}/>
              <blur>
            <h1>
               Sign In
             </h1>
             </blur>
            <h2>Email :
            <TextField name="email"
             type="email"
             placeholder="johndoe@email.com"
             variant="standard"/></h2>
            <h2>Password :
            <TextField
            name="password"
            type="password"
            placeholder="password"
            variant="standard"/>
           </h2>
            <button className="cld">
            <Link to ="/Main"><h3> SignIn </h3></Link>
            </button>
            <center><h5>New user?</h5>
            </center>
            <button   varient="contained" size="9+8medium" color="charreuse">
            <Link to ="/Signup"><h4>Signup</h4></Link>
            </button>
            <button varient="contained" size="small" color="green">
            <Link to ="/forget"><h4>Forget Password? </h4></Link>
            </button>
            </center>
            </Box>
          </div>
            
        </div>
    )
}
export default Login;