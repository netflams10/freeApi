import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';




import { create_project } from "../redux/actions/projectAction"

const CreateProject = ({ message, create_project, history }) => {
    console.log(message)
    useEffect(() => {
        if (message === "Successful") {
            history.push('/');
        }
    }, [message])
    const [project, setProject] = useState({
        project_name: "",
        description: "",
        project_awarder: "",
    });

    const reset = () => setProject({ ...project, project_name: "", description: "", project_awarder: "", })

    const { project_name, description, project_awarder } = project

    const onChange = e => setProject({ ...project, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        if (project_name.length <= 3 || description.length <= 30 || project_awarder.length <= 3) {
            console.log("error");
            return
        }
        create_project(project)
        return reset();
    }

    return (
        <Fragment>
            <div>Create New Project</div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" name='project_name' value={project_name} placeholder="Project Name" onChange={onChange} />
                </div>

                <div>
                    <input type="text" name='description' value={description} placeholder="Project Description" onChange={onChange} />
                </div>

                <div>
                    <input type="text" name='project_awarder' value={project_awarder} placeholder="Project Awarder" onChange={onChange} />
                </div>

                <div>
                    <button>Create</button>
                </div>
            </form>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    message: state.project.message
});

export default connect(mapStateToProps, { create_project }) (CreateProject);
