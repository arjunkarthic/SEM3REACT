

import  { Route ,Routes} from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Home from './home';
import Forget from './forget';
import Main from './main';
import Menu from './menu';
import Feedback from './feedback';
import Order from './order';

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/"element={<Home/>}></Route>
      <Route path="/Forget"element={<Forget/>}></Route>
      <Route path="/Main"element={<Main/>}></Route>
      <Route path="/Menu"element={<Menu/>}></Route>
      <Route path="/Feedback"element={<Feedback/>}></Route>
      <Route path="/Order"element={<Order/>}></Route>
    </Routes>
  );
}

export default App;
