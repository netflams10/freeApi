import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import SpinnerPage from "../../reuseable/Spinner";
import DetailsProject from "../components/page_components/DetialsProject";


import { single_project } from "../redux/actions/projectAction";

const ViewProject = ({ match, single_project, project, loading }) => {
    useEffect(() => {
        single_project(match.params.id)
        // eslint-disable-next-line
    }, []);

    return (
        loading ? <SpinnerPage /> : <DetailsProject project={project} />
    )
}

ViewProject.propTypes = {
    single_project: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    project: state.project.project,
    loading: state.project.loading
})

export default connect( mapStateToProps, { single_project }) (ViewProject);
