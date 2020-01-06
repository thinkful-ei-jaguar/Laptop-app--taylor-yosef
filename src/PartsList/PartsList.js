import React, { Component } from 'react';
import Processor from '../Processor/Processor';
import Os from '../OS/OS';
import VideoCard from '../VideoCard/VideoCard';
import Display from '../Display/Display';

class PartsList extends Component {
  render(){
    const key=[];
    Object.keys(this.props.items).map((item) => (
    key.push(item)))
    //console.log(key[2]);
    return(
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Processor key={key[0]} items={this.props.items} handleUpdate={this.props.handleUpdate} selected={this.props.selected}/>
        <Os key={key[1]} items={this.props.items} handleUpdate={this.props.handleUpdate} selected={this.props.selected}/>
        <VideoCard key={key[2]} items={this.props.items} handleUpdate={this.props.handleUpdate} selected={this.props.selected}/>
        <Display key={key[3]} items={this.props.items} handleUpdate={this.props.handleUpdate} selected={this.props.selected}/>
      </form>
    );
  }
}

export default PartsList;