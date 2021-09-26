import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { loadUser } from '../redux/actions/authAction';

import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthenticated, loading, user, loadUser, ...rest }) => {
    useEffect(() => {
        if ((user === null && localStorage.getItem('token') !== null) || loading) {
            loadUser()
        }
        // eslint-disable-next-line
    }, [user])

    return (
        <Route {...rest} render={props =>
            !isAuthenticated && !loading ? (<Redirect to="/login" />)
            : (<Component {...props} />)
            }
        />
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
    user: state.auth.user
})

export default connect(mapStateToProps, { loadUser }) (PrivateRoute)
