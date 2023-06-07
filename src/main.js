import {AppBar, Toolbar,Typography,Box,Button, Avatar,IconButton} from '@mui/material';
import './main.css';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import project from './photo/project.jpg';
import home from './photo/home.jpeg';
import { ForkLeft } from '@mui/icons-material';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
const Main = () => {
    return(
        <div className="class">
            <AppBar sx={{ color:"white" ,bgcolor:"chocolate"}}>
                <Toolbar ax={{justifyContent : 'space-between'}}>
                <Box sx={{display:'flex' ,alignItems:'center',gap:'250px'}}>
                <Avatar sizes='500px' alt="Error" src={project} sx={{ width: 150, height: 80}}/>
                    <Typography>
                      <h1>
                      <Link to ="/Menu">MENU</Link>
                      </h1>
                    </Typography>
                    <Typography>
                      <h1 color="black">
                      <Link to ="/Feedback" color="inherit">FEEDBACK</Link>
                        </h1>
                    </Typography>
                    <Link to ="/order" color="inherit">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary" background="black" padding-top="5px" >
                       <ShoppingCartIcon />
                      </StyledBadge>
                     </IconButton>
                     </Link>
                </Box>
                </Toolbar>
            </AppBar>
            <Box>
              <img src={home} alt="error"/>
            </Box>
        </div>
    )
}
export default Main;
