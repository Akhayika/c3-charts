import React,{Component} from "react";
import {render} from "react-dom";
import d3 from "d3";
import c3 from "c3";

class LineChart extends Component{
  constructor(props){
    super(props);
    this.state={
      columns:[
  ["My Number",30,200,100,400,150,250],
  ["Your Number",50,20,10,40,15,25]
]
    }
  }
}