import React,{Component} from "react"
class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {number : 0};
        this.count = this.increment.bind(this);
      }
    
      increment() {
        this.setState((prevState)=>{
          return {number : prevState.number+1}
        })
      }
    
     
      render() {
        return (
          <div>
              <h2>Class Component clicked count : {this.state.number}.</h2>
              <button onClick={this.count}>Click</button>            
          </div>
        );
      }
  }
  export default ClassComp;