import React from "react";
import PropTypes from "prop-types";

const SignUpView = (props) => {
  return (
    <div class="center">
      <body class="text-center">
      {console.log("hellpo")}
      <form class="form-signin" onSubmit={props.handleSubmit}>
      <h2 class="h3 mb-3 font-weight-normal">Sign Up</h2>
      <br/>
        <div>
          Username:{" "}
          <input
          class="form-control"
            value={props.userName}
            name="userName"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Password:{" "}
          <input
          class="form-control"
            value={props.password}
            type="password"
            name="password"
            type="password"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
        email:{" "}
          <input
          class="form-control"
            type="email"
            value={props.email}
            name="email"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <br/>
        <button className="btn btn-primary">Signup</button>
      </form>
      </body>
    </div>
  );
};

SignUpView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SignUpView;