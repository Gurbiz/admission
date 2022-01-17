import React from 'react';
import './button.css';

function Buttone({link}) {
    return( 
        <div>
        <a href="#" className="previous">Back</a>
        <a href={link} className="next">Next</a>
        
        
        
        </div>
    )
}

export default Buttone;