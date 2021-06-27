import React from 'react'
import './App.css';

 


const Card=({task,delWork,h,m,s })=>{
    
    const cards=task.length?( task.map(tt =>{ 
      
      
        
      
      
        return (
            <div className="row" key={tt._id}>
            
                <div className="col l6 s10 m7">
                    <div className="card grey lighten-1   z-depth-3">
                        <div className="card-title center teal-text text-lighten-1"><h3>TASK</h3></div>
                        <div className="card-content center">
                        <h6>{tt.task}</h6>
                        <br></br>
                        
                            <p className="teal-text text-darken-3">time left:</p>
                            <div className="container">
                            <div className="card black white-text">
                               {h} : {m} : {s}
                            </div></div>
                          
                        </div>
                        
                        
                        <div className="card-action ">
                        <span  onClick={()=>{delWork(tt._id)}}  className="btn large-btn text-grey right yellow  darken-3 pulse ">
                          finished
                        </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
      })
    ):( <div className="container">
    <div className="container ">
    <div className="container">
    <h3 className="card #00e676 green accent-3 white-text  center">NO WORK</h3>
    </div>
    
    </div>
    
    </div>) 
    
    return(
        <div className="content">
         
            {cards}
           
        </div>
    )
}

export default Card;