import Login from './pages/Login and Signup/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css';
import PrivateRoute from './utils/PrivateRoute'
import {AuthProvider} from './context/AuthContext'
import Home from './pages/Home/Home';
import Reset_Password from './pages/Login and Signup/Reset_Password';

function App() {
  
  return (
    <div className="App">
    <Router>
    <AuthProvider>
      <Routes>  
            {/* <PrivateRoute></PrivateRoute> */}
            {/* {"/api/user/reset-password/"+uid+"/"+token+"/"} */}
            <Route element={<Home/>} path='/' exact></Route>
            <Route element={<Login/>} path='/login' exact></Route>
            <Route element={<Reset_Password/>} path="/api/user/reset-password/:uid/:token" exact></Route>
      </Routes>
      </AuthProvider>  
    </Router>
    </div>
    
  );
}

export default App;
