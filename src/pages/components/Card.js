import React from 'react'

function Card(props){
    
    return (
        <div className="card">
            <img src={props.imageUrl} alt="props.title"/>
            <div className="details">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                <span>{props.location.toUpperCase()}    </span>
                <a href={props.googleMapsUrl}>View on GoogleMaps</a>
                <h2>{props.title.toUpperCase()}</h2>
                <p><b>{props.startDate} - {props.endDate}</b></p>
                <p className="description">{props.description}</p>  
            </div>
        </div>
    )
}
export default Card