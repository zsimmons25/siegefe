import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    const { toggle } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> {this.state.activeItem.operator} </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Faction:</Label>
              {' '}
              <Label>{this.state.activeItem.faction}</Label>
            </FormGroup>
            <FormGroup>
              <Label>Gadget:</Label>
              {' '}
              <Label>{this.state.activeItem.gadget}</Label>
            </FormGroup>
            <FormGroup>
              <Label>Equipment:</Label>
              {' '}
              <Label>{this.state.activeItem.equipment}</Label>
            </FormGroup>
            <FormGroup>
              <Label>Armor:</Label>
              {' '}
              <Label>{this.state.activeItem.armor}</Label>
            </FormGroup>
            <FormGroup>
              <Label>Speed:</Label>
              {' '}
              <Label>{this.state.activeItem.speed}</Label>
            </FormGroup>
            <FormGroup>
              <Label>Counters:</Label>
              {' '}
              <Label>{this.state.activeItem.counters}</Label>
            </FormGroup>
          </Form>
        </ModalBody>
        {/*
        <ModalFooter>
          <Button color="danger" onClick={() => toggle(this.state.activeItem)}>
            X
          </Button>
        </ModalFooter>
        */} 
      </Modal>
    );
  }
}