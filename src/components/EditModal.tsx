import React, { useState, Component } from "react";
import { Formik, Form, Field } from "formik";
import { isTemplateElement } from "@babel/types";

interface Props{
    activeItem: {
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
        Operator: this.props.activeItem.operator,
        Faction: this.props.activeItem.faction,
        Gadget: this.props.activeItem.gadget,
        Equip1: this.props.activeItem.equip1,
        Equip2: this.props.activeItem.equip2,
        Armor: this.props.activeItem.armor,
        Speed: this.props.activeItem.speed,
        Side: this.props.activeItem.side,
        Primary1: this.props.activeItem.prim1,
        Primary2: this.props.activeItem.prim2,
        Primary3: this.props.activeItem.prim3,
        Secondary1: this.props.activeItem.secon1,
        Secondary2: this.props.activeItem.secon2,
        Release: this.props.activeItem.release,
        Counter1: this.props.activeItem.count1,
        Counter2: this.props.activeItem.count2,
        Counter1p: this.props.activeItem.count1p,
        Counter2p: this.props.activeItem.count2p,
      };
    onSubmit = (values: any) => {
        console.log(values);
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
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Operator" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Faction</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Faction" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Gadget</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Gadget" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Equip1</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Equip1" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Equip2</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Equip2" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Armor</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Armor" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Speed</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Speed" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Side</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Side" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Primary 1</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Primary1" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Primary 2</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Primary2" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Primary 3</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Primary3" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Secondary 1</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Secondary1" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Secondary 2</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Secondary2" />
                                </div>
                                <div className="flex flex-col mx-1">
                                    <span>Release</span>
                                    <Field className="bg-zinc-800 text-neutral-300" type="text" name="Release" />
                                </div>
                            </div>
                            <h3>Counters</h3>
                            <div className="flex">
                                <div className="flex flex-col w-1/2 mx-1">
                                <Field className="bg-zinc-800 text-neutral-300" as="select" name="Counter1">
                                {this.props.data.map((item => (
                                    <option key={item.id} value={item.operator}>
                                    {item.operator}
                                    </option>
                                )))}
                                </Field>
                                <Field className="bg-zinc-800 text-neutral-300 h-40 mt-2" as="textarea" name="Counter1p" />
                                </div>
                                <div className="flex flex-col w-1/2 mx-1">
                                <Field className="bg-zinc-800 text-neutral-300" as="select" name="Counter2">
                                {this.props.data.map((item => (
                                    <option key={item.id} value={item.operator}>
                                    {item.operator}
                                    </option>
                                )))}
                                </Field>
                                <Field className="bg-zinc-800 text-neutral-300 h-40 mt-2" as="textarea" name="Counter2p" />
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