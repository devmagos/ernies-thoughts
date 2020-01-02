import React from 'react';

 function Blogpost(props) {
    return (
        
        <div className='blogpost'>
            <h3>{props.publicationTitle}</h3> 
            <p>{props.body}</p>
            <h2>{props.authorName}</h2>
            <h5>Time posted: {new Date().toTimeString().split("", 14)}</h5>           
        </div>
        
    );
}

export default Blogpost;