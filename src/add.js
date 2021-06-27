import React,{Component} from 'react'
import axios from 'axios'
class Add extends Component{
     
    state={
        task:"",
        time:[]
    }
    cha=(e)=>{
        
     this.setState({
        
        [e.target.id]: e.target.value
     }) 
    }
   
    sub=(e)=>{
     
     e.preventDefault();
      
    
    axios.post('/api/tasks/add',{ task: this.state.task })
     this.setState({
         
         task:""

     })
     alert('Task added')
        console.log(this.state);
    }
    final=()=>{
        this.props.history.push("/");
        
    }
    render(){
        console.log(this.props);
      console.log(this.state)
     return(
        
        <div className="row">
            <div className="box col s12 m6 l4 ">
             <form  onSubmit={this.sub} className="form">
             <button className="btn-floating  teal lighten-3 pulse LARGE right">
                  <i className="material-icons center">add</i>
                  </button>
                 <label htmlFor="task">ADD WORK</label>
                 <input className="grey" type="text" id="task" onChange={this.cha} value={this.state.task}/>
                 
             </form>
            
            </div>
            <span  onClick={()=>{this.final()}}  className="btn-floating teal lighten-3 right">
                 <i className="material-icons">close</i>
             </span>
        </div>
    )
     }
     
}
export default Add;