import React from "react";
import { connect } from "react-redux";
import { getMe } from "../api/queries/index";
export const isAuth = WrappedComponent => {
  class Comp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null
      };
    }
    async componentDidMount() {
      try {
        const response = await getMe(localStorage.getItem("token"));
        console.log("me", response);
        this.setState({ user: response.data });
        const token = response.data.auth_token;
        if (token !== localStorage.getItem("token")) {
          this.props.history.push("/login");
        }
      } catch (error) {
        console.log("error", error);
        return this.props.history.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} user={this.state.user} />;
    }
  }
  const mapStateToProps = state => ({
    data: state.user
  });
  return connect(mapStateToProps, null)(Comp);
};
