import React, { useState, useEffect } from "react";
import { MDBContainer} from 'mdbreact';

// Context Import
import { loginUser } from '../redux/actions/authAction';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Login = ({loading, message, isAuthenticated, loginUser, history}) => {
    const [creds, setCreds] = useState({email: '', password: ''})

    useEffect(() => {
        if (message === "Credential seems to exists!" && loading === false) {
            console.log(message);
            setCreds({ ...creds, password: '' })
        }
        if (isAuthenticated) {
            history.push('/')
        }
        // eslint-disable-next-line
    }, [loading, message])

    const onChange = e => setCreds({...creds, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        if (creds.email === '' || creds.password === '') {
            console.log("Both fields are required!")
        } else {
            loginUser(creds)
        }
    }

    return (
        <MDBContainer>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" name="email" value={creds.email} onChange={onChange} placeholder="example@email.com" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" value={creds.password} onChange={onChange} placeholder="password" />
                <button>Submit</button>
            </form>
        </MDBContainer>
    );
};

Login.propTypes = {
    loading: PropTypes.bool,
    loginUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    message: state.auth.message,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect( mapStateToProps, { loginUser } ) (Login);
