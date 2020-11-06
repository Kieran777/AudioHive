import React from 'react';
import './Events.css';
import Poster from '../assets/Poster.jpg';
import PromoVid from '../assets/PromoVid.mp4'

function Events(){
    
    return(
        <div id="mainEvents">
            
            <h1>Upcoming Events</h1>
            <img id="posterI" src={Poster} alt="Poster" />
            <br />
            <video width="320" height="240" controls>
                <source src={PromoVid} typeof="video/mp4" />    
            </video>  
        </div>
    )
}
export default Events;