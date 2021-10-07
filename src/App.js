import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import { BrowserRouter, Link, Switch,Route } from 'react-router-dom';
import Home from "./components/Home"
import Pagenotfound from './components/Pagenotfound';
import Navbar from './components/Navbar'
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import ErrDemo from './components/ErrDemo';
import React from 'react';
 
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <UserContext.Provider value="Nayana">
      <ChannelContext.Provider value="Nitya">
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Login}></Route>
          <Route exact path="/purecomp" component={ParentComp}></Route>
          <Route exact path="/refdemo" component={RefDemo}></Route>
          <Route exact path="/errdemo" component={ErrDemo}></Route>
					<Route exact path="/*" component={Pagenotfound}/>
				</Switch>
        </ChannelContext.Provider>
        </UserContext.Provider>
			</BrowserRouter>
      
      
    </div>
  );
}

export default App;
