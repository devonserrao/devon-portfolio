import React from 'react';
import './AngularCarCompProject.css';

function AngularCarCompProject(props) {
    return(
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">DSB Car Company Project</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
                <ol>
                    <li>
                    Worked with a group of 3 to develop a car company website.
                    </li>    
                    <li>
                        Angular, HTML, CSS, Typescript, Javascript and Bootstrap used in the website front-end.
                    </li>
                    <li>
                        C# and Entity Framework used to create back-end and database
                    </li>
                </ol>
             </p>
            {/* <a href="#" className="card-link">Card link</a> */}
            <a href="#" className="card-link">Another link</a>
        </div>
        </div>
    )
}

export default AngularCarCompProject;