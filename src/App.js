import React, {useState} from "react";
import {Route, Link, Switch} from 'react-router-dom'
import Home from "./Home"
import Form from "./Form"
import Confirmation from "./Confirmation"
import styled from 'styled-components'

const StyledDiv = styled.div`

display:flex;
justify-content:center;



`



const App = () => {
  const [allUsers,setAllUsers] = useState([])
  return (
    <StyledDiv> 

         <h1>Lambda Eats</h1>
     <nav>
       <Link to="/"><button>Home</button></Link>
       <button>Help</button>
     </nav>
    <Link to="/pizza"><button>Pizza</button></Link>
    
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/pizza">
            <Form allUsers={allUsers} setAllUsers={setAllUsers} /> 
        </Route>
        <Route exact path="/confirmation">
            <Confirmation />
        </Route>
    </Switch>
      </StyledDiv>
  );
};
export default App;
