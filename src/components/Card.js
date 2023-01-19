import React from 'react'
import star from '../images/Star1.svg'
import image from '../images/katie-zaferes.png'
const Card = (props) => {
    let badge;
    if (props.openSpots === 0 ){
        badge = "Sold Out"
    }else if(props.location === "Online"){
        badge = "Online"
    }else{
        badge = "Available"
    }
  return (
    <>
        <div className="card">
            <div className="card-body">
                {badge && <div className="card--badge">{badge}</div>}
                <img src={image} alt="Card-img" className='card--image' /> <br />
                <div className="card--stats"> 
                <img src={star} className="card--star"/>
                <span>{props.stats.rating} </span>
                <span className='light'>({props.stats.reviewCount})•</span>
                <span className='light'> {props.location}</span>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--price">From <span className='bold'>${props.price}</span> / person</p>
            </div>
        </div>    
    </>
)
}

export default Card