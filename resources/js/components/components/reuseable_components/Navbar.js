import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'




import { Link } from 'react-router-dom';

import { loadUser } from '../../redux/actions/authAction'

const Navbar = ({ isAuthenticated, user, loading, loadUser }) => {

    useEffect(() => {
        if ((loading || localStorage.getItem('token')) && user === null) {
            loadUser()
        }
        // eslint-disable-next-line
    }, [loading, user])

    const auth = (
        <Fragment>

            <li>completed</li>
            <li>in progress</li>
            <Link to="/create-project">
                <li>new project</li>
            </Link>
            <li>{ user === null ? 'Hello' : "Hello " + user.username }</li>
            <li>Logout</li>
        </Fragment>
    );

    const guest = (
        <Fragment>
            <li>login</li>
            <li>register</li>
        </Fragment>
    )
    return (
        <div>
            <div>Bug Tracker</div>
            <ul>
                { !isAuthenticated ? guest : auth }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
})
export default connect(mapStateToProps, { loadUser }) (Navbar)
