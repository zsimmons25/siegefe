import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

interface Props{
    activeItem: {
        id: number;
        operator: string;
        faction: string;
        gadget: string;
        equip1: string;
        equip2: string;
        armor: string;
        speed: string;
        side: string;
        prim1: string;
        prim2: string;
        prim3: string;
        secon1: string;
        secon2: string;
        release: string;
        count1: string;
        count2: string;
        count1p: string;
        count2p: string;
      },
    data: [],
    modal: boolean;
    toggle: (open: boolean) => void;
  }
  interface State{
    activeItem: {
        id: number;
        operator: string;
        faction: string;
        gadget: string;
        equip1: string;
        equip2: string;
        armor: string;
        speed: string;
        side: string;
        prim1: string;
        prim2: string;
        prim3: string;
        secon1: string;
        secon2: string;
        release: string;
        count1: string;
        count2: string;
        count1p: string;
        count2p: string;
      },
    data: [],
    modal: boolean;
    toggle: (open: boolean) => void;
  }

export default class EditModal extends Component <Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
          activeItem: props.activeItem,
          data: [],
          modal: props.modal,
        } as State;
      }
      initialValues = {
        id: this.props.activeItem.id,
        operator: this.props.activeItem.operator,
        faction: this.props.activeItem.faction,
        gadget: this.props.activeItem.gadget,
        equip1: this.props.activeItem.equip1,
        equip2: this.props.activeItem.equip2,
        armor: this.props.activeItem.armor,
        speed: this.props.activeItem.speed,
        side: this.props.activeItem.side,
        prim1: this.props.activeItem.prim1,
        prim2: this.props.activeItem.prim2,
        prim3: this.props.activeItem.prim3,
        secon1: this.props.activeItem.secon1,
        secon2: this.props.activeItem.secon2,
        release: this.props.activeItem.release,
        count1: this.props.activeItem.count1,
        count2: this.props.activeItem.count2,
        count1p: this.props.activeItem.count1p,
        count2p: this.props.activeItem.count2p,
      };
      refreshList = () => {
        axios
          .get("http://localhost:9001/api/operators/")
          .then((res) => this.setState({ activeItem: res.data }))
          .catch((err) => console.log(err));
      };
      onSubmit = (values: JSON) => {
        const activeItem = this.state.activeItem;
        console.log(values);
        axios({
          method: 'PUT',
          url: `http://localhost:9001/api/operators/${activeItem.id}/`,
          data: values,
          headers: {
              'Content-Type': "application/json",
            },
        })
          .then(function (res) {
             console.log(res);
             alert('Changes submitted');
          })
          .catch(function (res) {
             console.log(res)
        });
      };
    render() {
        const { toggle } = this.props;
        return(
            <div className='fixed inset-0 flex justify-center items-center w-full h-full bg-black bg-opacity-40' onClick={() => {toggle(false)}}>
                <div className='relative flex flex-col justify-center items-center w-3/4 h-auto rounded-md border-slate-900 border-2 outline outline-1 outline-black bg-zinc-900 text-neutral-300' onClick={(e) => { e.stopPropagation()}}>
                    <Formik initialValues={this.initialValues} onSubmit={this.onSubmit}>
                        <Form>
                            <h1 className='text-2xl text-center'>{this.state.activeItem.operator}</h1>
                            <div className="flex flex-wrap">
                                <div className="flex flex-col mx-1">
                                    <span>Operator</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="operator" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Faction</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="faction" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Gadget</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="gadget" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Equip1</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="equip1" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Equip2</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="equip2" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Armor</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="armor" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Speed</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="speed" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Side</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="side" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Primary 1</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="prim1" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Primary 2</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="prim2" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Primary 3</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="prim3" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Secondary 1</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="secon1" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Secondary 2</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="secon2" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Release</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="release" />
                                </div>
                            </div>
                            <h3>Counters</h3>
                            <div className="flex">
                                <div className="flex flex-col w-1/2 mx-1">
                                <Field className="bg-zinc-800 text-neutral-300" as="select" name="count1">
                                {this.props.data.map((item => (
                                    <option key={item.id} value={item.operator}>
                                    {item.operator}
                                    </option>
                                )))}
                                </Field>
                                <Field className="bg-zinc-800 text-neutral-300 h-40 mt-2" as="textarea" name="count1p" />
                                </div>
                                <div className="flex flex-col w-1/2 mx-1">
                                <Field className="bg-zinc-800 text-neutral-300" as="select" name="count2">
                                {this.props.data.map((item => (
                                    <option key={item.id} value={item.operator}>
                                    {item.operator}
                                    </option>
                                )))}
                                </Field>
                                <Field className="bg-zinc-800 text-neutral-300 h-40 mt-2" as="textarea" name="count2p" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                            <button type="submit">Submit</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        )};
}