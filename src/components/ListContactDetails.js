import React from 'react';

function ListContactDetails(props) {

    const itemList = props.items.map( (item) => 
        <li key={item.id.toString()}>
            {item.value}
        </li>
    );

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {itemList}
            </ul>
        </div>
    )
}

function EmailList(props) {
    
    const emails = [
        {
            id: 1,
            value: "placeholder@gmail.com"
        },
        {
            id: 2,
            value: "placeholder1@dd.edu"
        },
        {
            id: 3,
            value: "placeholder2@aa.edu"
        }
    ];

    return (
        <ListContactDetails title="Emails" items={emails} />
    );
}

export {ListContactDetails, EmailList};