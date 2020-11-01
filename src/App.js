import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms'
import Room from './pages/Room'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Data from "./data";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home}/>
          <Switch>
               <Route exact path="/rooms/" component={Rooms}/>
               <Route exact path="/room/:slug" component={Room}/>
               <Route path="/error" component={Error}/>
           </Switch>
   </BrowserRouter>
  );
}

export default App;
