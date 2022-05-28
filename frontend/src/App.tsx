import './App.css';
import SignIn from './components/login/SigninComponent';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/login/SignupComponent';
import React from 'react';
import axios from 'axios';
import ResponsiveAppBar from './components/utils/ResponsiveAppBar';
import User from './models/user';
import ProductsViewComponent from './components/product/ProductsViewComponent';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loggedUser, setLoggedUser] = React.useState<User | null>(null);
  let navigate = useNavigate();

  React.useEffect(
    () => {
      axios.get(
        "http://localhost:8080/checklogin", 
        { 
            headers: {'Content-Type': 'application/json' },
            withCredentials: true
        }).then(({data: user}) => {
          setLoggedUser(user);
          setLoggedIn(true);
          navigate("/");
        }
        ).catch(() => {
          setLoggedUser(null);
          setLoggedIn(false);
          navigate("/signin");
        })
    },
    []
  )

  return (
    <Routes>
      {
        (loggedIn && loggedUser) ? 
        <>
          <Route path="/" element={<><ResponsiveAppBar user={loggedUser}/> <Outlet/></>}>
            <Route path="products" element={<ProductsViewComponent/>}/>
            <Route path="wallet" element={<div>Wallet</div>}/>
          </Route>
        </> : (
        <>
          <Route path="/signin" element={<SignIn setLoggedUser={setLoggedUser} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </>
        )
      }
    </Routes>
  );
}

export default App;
