import { Avatar, Button , TextField , Card ,CardMedia} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import project from './photo/project.jpg';
import caproject from './photo/caproject.jpg';
const Forget = () => {
    return(
        <div className='madhu1'>
          <div className='box1'>
          <Box sx={{height:'500px', width:'500px'}} color="Black" bgcolor="chocolate" p={1} width="12">
           <center>
           <Avatar sizes='700px' alt="Error" src={project} sx={{ width: 150, height: 80}}/>
              <blur>
            <h1>
               Sign In
             </h1>
             </blur>
            <h2>Email Id :
            <TextField name="email"
             type="email"
             placeholder="johndoe@email.com"
             variant="standard"/>
             </h2>
             <h2>
                Send Request for new password
             </h2>
            <button className="cld">
            <Link to ="/login"><h3>  Send  </h3></Link>
            </button>
            </center>
            </Box>
          </div>
            
        </div>
    )
}
export default Forget;