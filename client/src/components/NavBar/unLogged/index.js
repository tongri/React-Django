import React, {Fragment} from "react";
import { MDBBtn } from "mdbreact";

const UnLogged = () => (
    <Fragment>
        <MDBBtn href="/login/" color="grey darken-5" size="sm">Login</MDBBtn>
        <MDBBtn color="primary" size="sm">Sign up</MDBBtn>
    </Fragment>
)

export default UnLogged;