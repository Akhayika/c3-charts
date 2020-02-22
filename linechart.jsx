import React,{Component} from "react";
import d3 from "d3";
import c3 from "c3";

export default class LineChart extends Component{
  constructor(props){
    super(props);
    this.state={
      columns:[
          ["My Number",30,200,100,400,150,250],
          ["Your Number",50,20,10,40,15,25]
        ]
    };
  }

  componentDidMount(){
    this.updateChart();
  }

  componentDidUpdate(){
    this.updateChart()
  }
  updateChart=()=>{}

  render(){
    return(
      <div>{this.updateChart()}</div>
    )
  }
}