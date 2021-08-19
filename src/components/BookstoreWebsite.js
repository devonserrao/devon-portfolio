import React, { useState } from 'react';

function ViewBookstoreProject(props) {
    
    let btnClicked = "Button was not clicked";
    if(props.clickedButton) {
        btnClicked = "Button was clicked!";
    }
    
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Bookstore Website</h5>
                <h6 className="card-subtitle mb-2 text-muted">September 2020</h6>
                <p className="card-text">
                    <ul>
                        <li>
                            LOREM IPSUMSDJSNDJNDNSDDND
                        </li> 
                    </ul>
                </p>
                <button onClick={props.click} className="btn btn-danger" type="button">Close Project</button>
            </div>
        </div>
    )
}

function ButtonToViewProject(props) {
    return (
        <div>
            <h6>Please click the button below to view the Bookstore Website Project!</h6>
            <button onClick={props.click} className="btn btn-success" type="button">View Bookstore Project</button>
        </div>
    )
}

function BookstoreWebsite(props) {

    const [clickedButton, setClickedButton] = useState(false);

    let view = clickedButton ?
        <ViewBookstoreProject click={() => setClickedButton(false)} /> :
        <ButtonToViewProject click={() => setClickedButton(true)} />;


    return (
        <div>
            {view}
        </div>
    )

}

export default BookstoreWebsite;