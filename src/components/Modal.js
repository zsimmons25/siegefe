import React, { Component } from "react";
import fallbackimg from '../Images/Weapon.png';

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
  replaceImage = (error) => {
    error.target.src = fallbackimg; 
  }
  render() {
    const { toggle } = this.props;
    return (
      <div className='fixed inset-0 flex justify-center items-center w-full h-full bg-black bg-opacity-40' onClick={toggle}>
        <div className='relative flex flex-col items-center w-6/12 h-auto rounded-md border-slate-900 border-2 outline outline-1 outline-black bg-zinc-900 text-neutral-300' onClick={(e) => { e.stopPropagation()}}>
          <h1 className='flex text-2xl text-center'> {this.state.activeItem.operator} </h1>
          <img className='relative top-1 w-72 h-60' src={require(`../Images/${this.state.activeItem.operator}.png`)} alt="op"></img>
          <h2 className="flex justify-center bg-slate-800 bg-opacity-40 w-full h-12 absolute top-56 mt-1 border-b border-black"><img className='w-12 h-12' src={require(`../Images/${this.state.activeItem.operator}_Badge.png`)} alt="badge"></img></h2>
          <h3 className="flex justify-center bg-zinc-700 w-full mt-1 space-x-5">
            <p className="absolute left-5 w-12 h-12 mt-2">{this.state.activeItem.gadget}</p>
            <img className='absolute left-24 h-14 mt-2' src={require(`../Images/${this.state.activeItem.gadget}.png`)} onError={this.replaceImage} alt="type"></img>
            <img className='w-12 h-12 mt-2' src={require(`../Images/${this.state.activeItem.faction}_Badge.png`)} alt="faction"></img>
            <img className='w-12 h-12 mt-2' src={require(`../Images/${this.state.activeItem.side}_Badge.png`)} alt="type"></img>
            <p className='absolute right-24 w-12 h-12 mt-2'>Armor:{this.state.activeItem.armor}</p>
            <p className='absolute right-5 w-12 h-12 mt-2'>Speed:{this.state.activeItem.speed}</p>
          </h3>
          <div className="bg-zinc-700 text-neutral-300 w-full h-full">
            <tbody className='text-2xl'>
              <h1 className="flex text-lg my-4">
                <p className="w-60 text-center">Primary</p>
                <p className="w-60 text-center">Secondary</p>
                <p className="w-60 text-center">Equipment</p>
              </h1>
              <h1 className="flex text-base">
                <p className="w-60 text-center">{this.state.activeItem.prim1.replace("%",".")}</p>
                <p className="w-60 text-center">{this.state.activeItem.secon1.replace("%",".")}</p>
                <p className="w-60 text-center">{this.state.activeItem.equip1.replace("%",".")}</p>
              </h1>
              <tr className='flex'>
                <img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.prim1}.png`)} alt="type"></img>
                <img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.secon1}.png`)} alt="type"></img>
                <img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.equip1}.png`)} alt="type"></img>
              </tr>
              <h2 className="flex text-base">
                <p className="w-60 text-center">{this.state.activeItem.prim2.replace("%",".")}</p>
                <p className="w-60 text-center">{this.state.activeItem.secon2.replace("%",".")}</p>
                <p className="w-60 text-center">{this.state.activeItem.equip2.replace("%",".")}</p>
              </h2>
              <tr className='flex'>
                <img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.prim2}.png`)} alt="type"></img>
                <img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.secon2}.png`)} alt="type"></img>
                <img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.equip2}.png`)} alt="type"></img>
              </tr>
              <h4 className="ml-14">{this.state.activeItem.count1}</h4>
              <tr className='flex'>
                <img className= 'w-36 h-30 mx-4 rounded-md border-black border-2' src={require(`../Images/${this.state.activeItem.count1}.png`)} alt="type"></img>
                <p>{this.state.activeItem.count1p}</p>
              </tr>
              <h5 className="ml-14">{this.state.activeItem.count2}</h5>
              <tr className='flex mb-4'>
                <img className= 'w-36 h-30 mx-4 rounded-md border-black border-2' src={require(`../Images/${this.state.activeItem.count2}.png`)} alt="type"></img>
                <p>{this.state.activeItem.count2p}</p>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    );
  }
}