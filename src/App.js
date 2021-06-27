import React,{Component} from 'react';
import './App.css'
import Add from './add'
import Card from './del'
import Form from './form'
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component{
 
  render(){
    
    return(
     <div className="main container">
      <h1 className="center blue-text text-lighten-3 grey darken-1 z-depth-4">WORK FOR TODAY</h1>

      <BrowserRouter>
      <Route exact path="/" component={Form}/>
      <Route exact path="/add" component={Add}/>
      <Route exact path="/del" component={Card}/>
      
     
     </BrowserRouter>
    
     
     
     
     </div>
     
            
      

         
     
    )
  }
}

export default App;
