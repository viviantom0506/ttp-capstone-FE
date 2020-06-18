import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import  SignUpView from "../views/SignUpView";
import { addUserThunk } from "../../thunks";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      email: "",
      isValidName: false,
      errors: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name === "userName") {
      this.setState({ userName: e.target.value }, this.validateName);
      console.log(this.state.userName)
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateName = () => {
      //check is the userName length great than 5
    const { userName } = this.state;
    let errors = { ...this.state.errors };
    let isValidName = true;
    if (userName.length < 6) {
      isValidName = false;
      errors.userName = "Invalid username, please enter more than 5 characters";
    }
    if (isValidName) {
      errors.userName = "valid username";
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidName) this.props.addUser(this.state);
  };
  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? "" : this.state.errors.userName}
        <SignUpView
          userName={this.state.userName}
          password={this.state.password}
          email={this.state.email}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addUser: (User) => dispatch(addUserThunk(User, ownProps)),
  };
};

SignUpContainer.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(SignUpContainer);