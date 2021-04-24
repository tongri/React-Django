import React, { Fragment } from "react";
import {MDBNavbarToggler, MDBCollapse,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
    } from "mdbreact";
  


class IsLogged extends React.Component {
    state = {
        isOpen: false
      };
        
      toggleCollapse = () => {
        this.setState(({isOpen}) => { return { isOpen: !isOpen} });
      }

    render() {
        console.log("navbar props", this.props);
        return(
        <Fragment>
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBDropdown>
            <MDBDropdownToggle nav caret>
            <span className="mr-2">{this.props.user.username}</span>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
            <MDBDropdownItem href="#!">My Account</MDBDropdownItem>
            <MDBDropdownItem href="#!">Change password</MDBDropdownItem>
            <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
        </MDBCollapse>
        </Fragment>
        )
    }
}

export default IsLogged;