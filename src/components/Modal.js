import React, { Component } from "react";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  toggle = () => {
    this.setState({ 0: !this.state.modal });
  };
  render() {
    const { toggle } = this.props;
    return (
      <div className='inset-0 flex justify-center items-center absolute w-full h-full bg-black bg-opacity-40' onClick={toggle}>
        <tbody className='flex flex-col items-center w-6/12 h-2/5 rounded bg-stone-700 text-slate-300' onClick={(e) => { e.stopPropagation()}}>
          <h1 className='flex text-2xl text-center'> {this.state.activeItem.operator} 
            <img className='w-8 h-8' src={require(`../Images/${this.state.activeItem.operator}_Badge.png`)} alt="badge"></img>
          </h1>
          <img src={require(`../Images/${this.state.activeItem.operator}.png`)} alt="op"></img>
          <h2 className="flex mt-2 space-x-5">
            <img className='w-12 h-12' src={require(`../Images/${this.state.activeItem.faction}_Badge.png`)} alt="faction"></img>
            <img className='w-12 h-12' src={require(`../Images/ATK_Badge.png`)} alt="type"></img>
          </h2>
          <div className='text-2xl mt-72 mr-96 p-o w-80 h-20 absolute'>
            <tr>
              <label className='mr-2'>Faction:</label>
              <label>{this.state.activeItem.faction}</label>
            </tr>
            <tr>
              <label className='mr-2'>Gadget:</label>
              <label>{this.state.activeItem.gadget}</label>
            </tr>
            <tr>
              <label className='mr-2'>Equipment:</label>
              <label>{this.state.activeItem.equipment}</label>
            </tr>
            <tr>
              <label className='mr-2'>Armor:</label>
              <label>{this.state.activeItem.armor}</label>
            </tr>
            <tr>
              <label className='mr-2'>Speed:</label>
              <label>{this.state.activeItem.speed}</label>
            </tr>
            <tr>
              <label className='mr-2'>Counters:</label>
              <label>{this.state.activeItem.counters}</label>
            </tr>
          </div>
        </tbody>
      </div>
    );
  }
}