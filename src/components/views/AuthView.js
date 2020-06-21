import React from 'react';
import { Link } from 'react-router-dom';
import './styling.css';
const AuthFormView = props => {
	const {
		name,
		displayName,
		handleSubmit,
		error,
		handleChange,
		isLoggedIn,
		userEmail,
	} = props;

	return (
		<div className="container-sm">
			<div className="card">
				<div className="container p-1">
					{isLoggedIn ? ` ${userEmail} is now logged in` : ''}
					<form onSubmit={handleSubmit} name={name}>
						<div>
							<label htmlFor="email">
								<small>Email</small>
							</label>
							<input
								className="form-control"
								name="email"
								type="text"
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor="password">
								<small>Password</small>
							</label>
							<input
								className="form-control"
								name="password"
								type="password"
								onChange={handleChange}
							/>
						</div>

						<button className="btn btn-dark logBtn" type="submit">
							{displayName}
						</button>

						{error && error.response && <div> {error.response.data} </div>}
					</form>
					{displayName === 'Login' ? (
						<Link to="/signup">New user? Make an account!</Link>
					) : (
						<Link to="/login">Already have an account? Login!</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default AuthFormView;
