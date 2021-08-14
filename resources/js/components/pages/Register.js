import react, {useState} from "react";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";


import {connect} from  "react-redux";

import {registerUser} from "../../action/acts/authActions";
import PropTypes from "prop-types";

import avatar from "../image/login-avatar.png";
import "./Pages.css";

const Register = ({loading, message, registerUser}) => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const resetState = () => {
        setUser({first_name: '', last_name: '', username: '',
            email: '', password: '', confirm_password: ''
        })
    }

    const onChange = (e) => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {password, confirm_password, first_name, last_name, username, email} = user
        if (password !== confirm_password) {
            console.log("Password did not match");
        } else if (first_name.length <= 3, last_name.length <= 3, username.length <= 3, email.length <= 3) {
            console.log("all fields must be greater than 3 letter!")
        }
        else {
            registerUser(user);
            // resetState();
        }
    }

    const {first_name, last_name, username, email, password, confirm_password} = user
    return (
        <div className="main-container">
            <div className="form-container">
                <img src={avatar} className="avatar" alt="avatar" />

                <form className="stretch" method="post" onSubmit={onSubmit}>
                    <div className="grey-text form-input-div">
                        <MDBInput label="Please Enter your First Name" className="text-input" name="first_name" value={first_name} onChange={onChange} group type="text"/>
                    </div>

                    <div className="grey-text form-input-div">
                        <MDBInput label="Please Enter your Last Name" className="text-input" name="last_name"  value={last_name} onChange={onChange} group type="text"/>
                    </div>

                    <div className="grey-text form-input-div">
                        <MDBInput label="Username" className="text-input" group type="text" name="username" value={username} onChange={onChange} />
                    </div>

                    <div className="grey-text form-input-div">
                        <MDBInput label="Email" className="text-input" group type="email" name="email"  value={email} onChange={onChange} />
                    </div>

                    <div className="grey-text form-input-div">
                        <MDBInput label="Password" className="text-input" group type="password" name="password" value={password} onChange={onChange} />
                    </div>

                    <div className="grey-text form-input-div">
                        <MDBInput label="Confirm Password" className="text-input" group type="password" name="confirm_password" value={confirm_password} onChange={onChange}  />
                    </div>

                    <div className="grey-text form-input-div">
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

Register.propTypes = {
    loading: PropTypes.bool,
    registerUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    message: state.auth.message
})

export default connect(mapStateToProps, {registerUser}) (Register);