import React from 'react'

 const ProjectDetails = (props) => {
     const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>The CW Television Network (commonly referred to as just The CW) is an American English-language free-to-air television network that is operated by The CW Network, LLC, a limited liability joint venture[2] between the CBS Entertainment Group unit of ViacomCBS; and the Studios and Networks division of AT&</p>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by Demartechx</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails