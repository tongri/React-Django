import React, { Fragment } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState(({isOpen}) => {
            return {
            isOpen: !isOpen
            }
        })
    }

    render(){
        return (
            <Fragment>
                <MDBBtn color="primary" onClick={this.toggle}>Medium modal</MDBBtn>
                <MDBModal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
                    <MDBModalBody>
                    {this.props.children}
                    </MDBModalBody>
                    <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </Fragment>
        )
    }
}