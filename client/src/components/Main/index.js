import React from "react";
import { isAuth } from "../../hoc/isAuth";
import NavbarPage from "../NavBar";
import { MDBContainer } from "mdbreact";

import "../../index.css";
import { Fragment } from "react";

const Main = ({ children }) => (
  <Fragment>
  <NavbarPage />
  <MDBContainer>
    {children}
  </MDBContainer>
  </Fragment>
)

export default isAuth(Main);
