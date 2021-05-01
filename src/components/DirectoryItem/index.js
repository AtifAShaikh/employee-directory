import React from 'react';

function DirectoryItem(props){
    return(
            <div className="card mb-2">
                <div className="card-body d-flex justify-content-center align-items-center">
                         <img src={props.picture} className="mr-3" width="200px"></img>
                         <div>
                             <h2>{props.name.title}. {props.name.first} {props.name.last}</h2>
                             <p>{props.gender} | {props.age}</p>
                             <h5>{props.email}</h5>
                        </div>    
                    </div>
                </div>
    );
}

export default DirectoryItem;