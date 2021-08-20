import React, {useState, useEffect} from 'react';

function FetchAPICall(props) {
    
    const[items, setItems] = useState([]);
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);

    useEffect( () => {
        fetch("https://anapioficeandfire.com/api/characters/583")
            .then( response => response.json() )
            .then( json => {
                console.log(json);
                setItems(json);
                setIsLoaded(true);
            })
            .catch( error => {
                console.error(error);
                setError(error);
            });
    }, []);

    let viewError = error ? 
        <div><h4>Error: {error.message}</h4></div> :
        null;

    let view = isLoaded ?
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <h1 className="display-4">{items.name}, {items.titles}</h1>
            <p className="lead">He knew nothing!</p>
            </div>
        </div>:
        <div><h1>LOADING.....</h1></div>;


    return(
        <div>
            {view}
            {viewError}
        </div>
    )

}

export default FetchAPICall;