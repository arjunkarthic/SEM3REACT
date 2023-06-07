import { Button , TextField} from "@mui/material";
import { Box } from "@mui/system";
import './feedback.css';
import { Link } from "react-router-dom";
const Feedback = () => { 
    return(
        <div className="aruna">
            <center>
            <Box sx={{height:'475px' , width:'480px'}} color="white" bgcolor="gold" p={1} width="12" padding-top="150px">
            <h1>
            <u>
                <b color="black">Feedback Form</b>
            </u>
            </h1>
           <h4>
            <u>   
                Name:
            </u>
            <TextField required
          id="outlined-required"
          label="Required"
          defaultValue="Enter name"></TextField>
            </h4>
            <h4>
                <u>
                    Email: 
                </u>
                <TextField name="email"
             type="email"
             placeholder="johndoe@email.com"
             label="Email"/>
            </h4>
            <h4>
                <u>
                    Comments:
                </u>
                <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Enter Comments"
        />
            </h4>
            </Box>
        </center>
        <div>
            <center>
            <button className="cld">
            <Link to ="/Main"><h4>SUBMIT</h4></Link>
            </button>
            </center>
        </div>
        </div>
    )
}
export default Feedback;
