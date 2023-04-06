import React, { Component } from 'react';
import fallbackimg from '../Images/Weapon.png';

interface Props{
  activeItem: any
  toggle: (open: boolean) => void;
}
interface State{
  activeItem: any
  toggle: (open: boolean) => void;
}

export default class CustomModal extends Component <Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      activeItem: props.activeItem,
    } as State;
  }
  replaceImage = (error) => {
    error.target.src = fallbackimg; 
  }
  render() {
    const { toggle } = this.props;
    if (this.state.activeItem.prim3 === 'Weapon3') {
      return (
        <div className='fixed inset-0 flex justify-center items-center w-full h-full bg-black bg-opacity-40' onClick={() => {toggle(false)}}>
          <div className='relative flex flex-col items-center w-6/12 h-auto rounded-md border-slate-900 border-2 outline outline-1 outline-black bg-zinc-900 text-neutral-300' onClick={(e) => { e.stopPropagation()}}>
            <h1 className='flex text-2xl text-center'> {this.state.activeItem.operator} </h1>
            <img className='relative top-1 w-72 h-60' src={require(`../Images/${this.state.activeItem.operator}.png`)} alt='op'></img>
            <div className='flex justify-center bg-slate-800 bg-opacity-40 w-full h-12 absolute top-56 mt-1 border-b border-black'><img className='w-12 h-12' src={require(`../Images/${this.state.activeItem.operator}_Badge.png`)} alt='badge'></img></div>
            <div className='flex justify-center bg-zinc-700 w-full mt-1 space-x-5'>
              <div className='absolute flex items-center justify-center left-5 mt-2'>
                <span>{this.state.activeItem.gadget}</span>
                <img className='h-12' src={require(`../Images/${this.state.activeItem.gadget}.png`)} onError={this.replaceImage} alt='gadget'></img>
              </div>
              <img className='w-12 h-12 mt-2' src={require(`../Images/${this.state.activeItem.faction}_Badge.png`)} alt='faction'></img>
              <img className='w-12 h-12 mt-2' src={require(`../Images/${this.state.activeItem.side}_Badge.png`)} alt='type'></img>
              <span className='absolute right-24 w-12 h-12 mt-2'>Armor:{this.state.activeItem.armor}</span>
              <span className='absolute right-5 w-12 h-12 mt-2'>Speed:{this.state.activeItem.speed}</span>
            </div>
            <div className='flex flex-wrap justify-center items-center bg-zinc-700 text-neutral-300 w-full h-full text-2xl'>
              <ul className='flex-col flex-grow w-60 text-base'>
                <h1 className='w-60 my-1 text-center'>Primary</h1>
                <li className='w-60 text-center'>{this.state.activeItem.prim1.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.prim1}.png`)} alt='Primary1'></img></li>
                <li className='w-60 text-center'>{this.state.activeItem.prim2.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.prim2}.png`)} alt='Primary2'></img></li>      
              </ul>
              <ul className='flex-col flex-grow w-60 text-base'>
                <h2 className='w-60 my-1 text-center'>Secondary</h2>
                <li className='w-60 text-center'>{this.state.activeItem.secon1.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.secon1}.png`)} alt='type'></img></li>
                <li className='w-60 text-center'>{this.state.activeItem.secon2.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.secon2}.png`)} alt='type'></img></li>
              </ul>
              <ul className='flex-col flex-grow w-60 text-base'>
                <h3 className='w-60 my-1 text-center'>Equipment</h3>
                <li className='w-60 text-center'>{this.state.activeItem.equip1.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.equip1}.png`)} alt='type'></img></li>
                <li className='w-60 text-center'>{this.state.activeItem.equip2.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.equip2}.png`)} alt='type'></img></li>
              </ul>
            </div>
            <div className='flex-col bg-zinc-700 text-neutral-300 w-full h-full text-2xl'>
              <h2 className='ml-14'>{this.state.activeItem.count1}</h2>
              <div className='flex'>
                <img className= 'w-36 h-30 mx-4 rounded-md border-black border-2' src={require(`../Images/${this.state.activeItem.count1}.png`)} alt='type'></img>
                <p className=''>{this.state.activeItem.count1p}</p>
              </div>
              <h3 className='ml-14'>{this.state.activeItem.count2}</h3>
              <div className='flex mb-4'>
                <img className= 'w-36 h-30 mx-4 rounded-md border-black border-2' src={require(`../Images/${this.state.activeItem.count2}.png`)} alt='type'></img>
                <p className=''>{this.state.activeItem.count2p}</p>
              </div>
            </div>
          </div>
        </div>
      )} else {
        return(
          <div className='fixed inset-0 flex justify-center items-center w-full h-full bg-black bg-opacity-40' onClick={() => {toggle(false)}}>
          <div className='relative flex flex-col items-center w-6/12 h-auto rounded-md border-slate-900 border-2 outline outline-1 outline-black bg-zinc-900 text-neutral-300' onClick={(e) => { e.stopPropagation()}}>
            <h1 className='flex text-2xl text-center'> {this.state.activeItem.operator} </h1>
            <img className='relative top-1 w-72 h-60' src={require(`../Images/${this.state.activeItem.operator}.png`)} alt='op'></img>
            <div className='flex justify-center bg-slate-800 bg-opacity-40 w-full h-12 absolute top-56 mt-1 border-b border-black'><img className='w-12 h-12' src={require(`../Images/${this.state.activeItem.operator}_Badge.png`)} alt='badge'></img></div>
            <div className='flex justify-center bg-zinc-700 w-full mt-1 space-x-5'>
              <div className='absolute flex items-center justify-center left-5 mt-2'>
                <span>{this.state.activeItem.gadget}</span>
                <img className='h-12' src={require(`../Images/${this.state.activeItem.gadget}.png`)} onError={this.replaceImage} alt='gadget'></img>
              </div>
              <img className='w-12 h-12 mt-2' src={require(`../Images/${this.state.activeItem.faction}_Badge.png`)} alt='faction'></img>
              <img className='w-12 h-12 mt-2' src={require(`../Images/${this.state.activeItem.side}_Badge.png`)} alt='type'></img>
              <span className='absolute right-24 w-12 h-12 mt-2'>Armor:{this.state.activeItem.armor}</span>
              <span className='absolute right-5 w-12 h-12 mt-2'>Speed:{this.state.activeItem.speed}</span>
            </div>
            <div className='flex flex-wrap justify-center items-center bg-zinc-700 text-neutral-300 w-full h-full text-2xl'>
              <ul className='flex-col flex-grow w-60 text-base'>
                <h1 className='w-60 my-1 text-center'>Primary</h1>
                <li className='w-60 text-center'>{this.state.activeItem.prim1.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.prim1}.png`)} alt='Primary1'></img></li>
                <li className='w-60 text-center'>{this.state.activeItem.prim2.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.prim2}.png`)} alt='Primary2'></img></li>
                <li className='w-60 text-center'>{this.state.activeItem.prim3.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.prim3}.png`)} alt='Primary3'></img></li>        
              </ul>
              <ul className='flex-col flex-grow w-60 text-base'>
                <h2 className='w-60 my-1 text-center'>Secondary</h2>
                <li className='w-60 text-center'>{this.state.activeItem.secon1.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.secon1}.png`)} alt='type'></img></li>
                <li className='w-60 text-center'>{this.state.activeItem.secon2.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.secon2}.png`)} alt='type'></img></li>
              </ul>
              <ul className='flex-col flex-grow w-60 text-base'>
                <h3 className='w-60 my-1 text-center'>Equipment</h3>
                <li className='w-60 text-center'>{this.state.activeItem.equip1.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.equip1}.png`)} alt='type'></img></li>
                <li className='w-60 text-center'>{this.state.activeItem.equip2.replace('%','.')}</li>
                <li><img className='w-60 h-20' src={require(`../Images/${this.state.activeItem.equip2}.png`)} alt='type'></img></li>
              </ul>
            </div>
            <div className='flex-col bg-zinc-700 text-neutral-300 w-full h-full text-2xl'>
              <h2 className='ml-14'>{this.state.activeItem.count1}</h2>
              <div className='flex'>
                <img className= 'w-36 h-30 mx-4 rounded-md border-black border-2' src={require(`../Images/${this.state.activeItem.count1}.png`)} alt='type'></img>
                <p className=''>{this.state.activeItem.count1p}</p>
              </div>
              <h3 className='ml-14'>{this.state.activeItem.count2}</h3>
              <div className='flex mb-4'>
                <img className= 'w-36 h-30 mx-4 rounded-md border-black border-2' src={require(`../Images/${this.state.activeItem.count2}.png`)} alt='type'></img>
                <p className=''>{this.state.activeItem.count2p}</p>
              </div>
            </div>
          </div>
        </div>
        )};
  }
}