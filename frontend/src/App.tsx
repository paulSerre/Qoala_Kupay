import './App.css';
import SignIn from './components/login/SigninComponent';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/login/SignupComponent';
import React from 'react';
import axios from 'axios';
import ResponsiveAppBar from './components/utils/ResponsiveAppBar';
import User from './models/user';
import ProductsViewComponent from './components/views/ProductsViewComponent';
import WalletViewComponent from './components/views/WalletViewComponent';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loggedUser, setLoggedUser] = React.useState<User | null>(null);
  let navigate = useNavigate();

  const goTo = React.useCallback(
    (loggedUser: User | null, loggedIn: boolean, path: string) => {
      setLoggedUser(loggedUser);
      setLoggedIn(loggedIn);
      navigate(path);
    },
    []
  )

  React.useEffect(
    () => {
      axios.get(
        "http://localhost:8080/checklogin", 
        { 
            headers: {'Content-Type': 'application/json' },
            withCredentials: true
        }).then(({data: user}) => {
          console.log(user)
          if (!user) {
            goTo(null, false, "/signin");
          } else {
            goTo(user, true, "/");
          }
        }).catch(() => {
          goTo(null, false, "/signin");
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
            <Route path="wallet" element={<WalletViewComponent/>}/>
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
