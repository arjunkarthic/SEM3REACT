import { Button , TextField} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import './order.css';
const Order = () => { 
    return(
        <div className="aruna">
            <center>
            <Box sx={{height:'475px' , width:'480px'}} color="white" bgcolor="lightblue" p={1} width="12" padding-top="150px">
            <h1>
            <u>
                <b color="black"> Order Now </b>
            </u>
            </h1>
           <h4>
            <u>   
                Items code :
            </u>
            <TextField required
          id="outlined-required"
          label="Required"
          defaultValue=""></TextField>
            </h4>
            <h4>
                <u>
                    Delivery Location :
                </u>
                <TextField name="address"
             type="address"
             placeholder="Address"
             label="Address"/>
            </h4>
            <h4>
                <u>
                 Phone no : 
                </u>
            <TextField name="number"
             type="number"
             placeholder="Number"
             label="Number"/>
              </h4>
            </Box>
        </center>
        <div>
            <center>
            <button className="dlv">
            <Link to ="/Main"><h3>SUBMIT</h3></Link>
            </button>
            </center>
        </div>
        </div>
    )
}
export default Order;


