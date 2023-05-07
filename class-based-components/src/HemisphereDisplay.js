import React from 'react';
import nh from './images/nh.jpg';
import sh from './images/sh.jpg';
import './HemisphereDisplay.css';


const hemisphereConfig = {
    Northern : {
        text:'it is northern hemisphere',
        display:nh
    },
    Southern: {
        text:'it is southern  hemisphere',
        display:sh
    }
}

const HemisphereDisplay = ({latitude}) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    // const display =  latitude > 0 ? nh : sh ;
    const { text, display} = hemisphereConfig[hemisphere];
    
    return  (<div className={hemisphere}>
        <img src={display} alt=''></img>
        Hry you are in {text}
    </div>
    )
}

export default HemisphereDisplay;