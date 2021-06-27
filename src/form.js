import React, { Component } from 'react';
import './App.css'
import Card from './del'
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task:{},
      hours:[],
      minutes:[],
      sec:[]

    }
    // this.startTimer = this.startTimer.bind(this);

    this.timer = 0;

  }
  componentDidMount() {
    axios.get('/api/tasks/')
      .then(response => {
        console.log(response)
        console.log(response.data)
        this.setState({
          task: response.data

        })

       const l=this.state.task.map((re)=>{
        this.setState({
          hours:23-new Date(re.createdAt).getHours(),
          minutes:60-new Date(re.createdAt).getMinutes(),
          sec:60-new Date(re.createdAt).getSeconds()


        })
       }) 
      })
    
      console.log('ji')
      this.timer = setInterval(this.countDown, 1000);
  }


  
    

  countDown = () => {
    const  { hours, minutes, sec} = this.state;
    let c_seconds = hours*3600+minutes*60+sec;

    if(c_seconds) {

      
      sec ? this.setState({sec: sec-1}) : this.setState({sec: 59});

      
      if(c_seconds % 60 === 0 && minutes) {
        this.setState({minutes: minutes -1});
      }
      if(!minutes) {
        this.setState({minutes: 59});
      }
      
      if(c_seconds % 3600 === 0 ) {
        this.setState({hours: hours-1});
      }

    } else {
      clearInterval(this.timer);
    }
  }


  delWork = (id) => {

    axios.delete('/api/tasks/' + id)
      .then(response => { console.log(response.data) });
    let task = this.state.task.filter(tt => {
      return tt._id !== id
    })
    this.setState({
      task: task
    })
    alert('completed')
  }


  
  render() {
    console.log(this.state,"hi")

    return (
      <div>
        <div className="main container">
          <span className="btn-floating btn-large   right pulse" onClick={() => { this.props.history.push("/Add") }}>
            <i className="material-icons white-text center">add</i>
          </span>
        </div>

        <Card task={this.state.task} h={this.state.hours} m={this.state.minutes} s={this.state.sec} delWork={this.delWork} />

         

      </div>




    )
  }
}

export default Form;
