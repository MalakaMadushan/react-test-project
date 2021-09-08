import React from "react";
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, BrowserRouter,Switch } from 'react-router-dom';
// import * as ROUTES from "./routes/route";

import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from './pages/About';

function App() {
  return(
  <BrowserRouter>
  <CssBaseline />
  <div className="App">
          
          <Switch>
              {/* <Route exact path={ROUTES.Home} element={<Home />}  />
              <Route exact path={ROUTES.Login} element={<Login />} />
              <Route exact path={ROUTES.Register} element={<Register />} /> */}

                <Route path="/" component={Login} exact />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Route path="/register" component={Register} />

              {/* <Route path = "home" component = {Home}  />
              <Route path = "login" component = {Login} />
              <Route path = "register" component = {Register} /> */}

         </Switch>
 </div>
 </BrowserRouter>
  );
}

export default App;
