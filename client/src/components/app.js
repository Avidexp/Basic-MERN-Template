import React, { Component } from 'react';
import {PanelGroup,Table, Panel, Button, Alert, Col} from "react-bootstrap";
import '../index.css';
import * as data from './data.json';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
class App extends Component {
  constructor(props){
    super(props);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      item:{}
    };
  }
  handleClose(){
    this.setState({show:false})
  }
  handleShow(item){
    this.setState({show:true, item: item})
    console.log(item);
  }
  handleClick(item){
    actions.runComponent(item, this);
 
  }
  componentWillMount(){
    this.setState({item: data}); 
    
  }
  getStatus(){
    switch(this.state.item.status){
    case 0:
      return "Pending"
    case 1:
      return "Completed Succesfully"
    case 2:
      return "Failed to Complete"
    }
  }
  render() {
    var i =0;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Scheduler</h1>
        </header>

         <Button onClick={() => this.handleClick(data)} bsStyle="success">Refresh Component</Button>
        <div id="mainContainer">
        <h3>Processes</h3>
        <Col xs={6} md={12}>
        <Table striped bordered condensed hover>
      <thead>
      <tr>
      <th>Name</th>
      <th>Type Id</th>
      <th>createdDate</th>
      <th>CompletionTime</th>
      <th>status</th>
      <th>Pending Messages</th>
      <th>Running</th>
      </tr>
      </thead>
      <tbody>
        <tr>
        <td>{data.name}</td>
        <td>{data.typeId}</td>
        <td>{data.createdDate}</td>
        <td>{data.CompletionTime}</td>
        <td>{this.getStatus()}</td>
        <td>{data.Queued_Messages}</td>
        <td>{data.isRunning === true ? 'Yes' : 'No'}</td>
        <td>{data.status !== 0 ? <Button onClick={() => this.handleClick(data)} bsStyle="success">Start</Button> :<Button onClick={() => alert("Button Clicked")} bsStyle="success" disabled>Start</Button> }</td>
        </tr>
        {/* alert(data.name + ", has been started on: " + Date().toString()) */}
      </tbody>
      </Table>
    </Col>
</div>
<div id="right">
 <Col xs={6} md={4}>
 <h3 >Recent Operations</h3>
 <Table striped bordered condensed hover>
 <thead>
      <tr>
      <th>Date</th>
      </tr>
      </thead>
      <tbody>

{data.lastRan.map((item) =>{
  if(i <5){
    i++
  return(
    <tr>
   <td>{item.toString()}</td>
   </tr>
  )}
})}

</tbody>
</Table>
 </Col>
 </div>
 </div>

    );
  }
}





export default App;