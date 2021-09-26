import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
    const {created_by, description, project_name, id, created_at} = props.project

    return (
        <div>
            <span>{created_at} {created_by.email}</span>

            <div>
                <Link to={`/project/${id}`}>
                    <h4>{project_name}</h4>
                </Link>
            </div>
            <div>
                <span>{description}</span>
            </div>
            <span>{created_by.username}</span>
        </div>
    )
}

export default Project
