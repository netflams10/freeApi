import React, {useEffect, Fragment, useState} from "react";
import Spinner from "../../reuseable/Spinner";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { get_all_project } from '../redux/actions/projectAction';

// Components
import Project from '../components/page_components/Project';


const Home = ({ loading, next, prev, get_all_project, projects }) => {
    const [url, setUrl] = useState('api/project')
    useEffect(() => {
        get_all_project(url)
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            { loading ?
                projects.map(project =>
                    <Project project={project} key={project.id} />
                )
                :
                <Spinner />

            }
        </div>
    )
}

Home.propTypes = {
    get_all_project: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    loading: state.project.loading,
    projects: state.project.projects,
    next: state.project.next,
    prev: state.project.prev
})

export default connect( mapStateToProps, { get_all_project }) (Home);
