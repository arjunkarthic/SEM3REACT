import { Link } from "react-router-dom";
import Image from './image.js';
import './App.css';
import { color, style } from "@mui/system";
const Home =() =>{
    return(
        <div>
            <Image/>
            <center>

            <button  className="lin" color="inherit"><Link to ="/Login"><h4>get started</h4></Link></button>
            </center>
        </div>
    )
}
export default Home;