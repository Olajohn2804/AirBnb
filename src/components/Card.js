import React from 'react'
import frame1 from '../images/Frame1.png'
import star from '../images/Star1.svg'
const Card = (props) => {
  return (
    <>
        <div className="card">
            <div className="card-body">
                <img src={`../images/${props.img}`} alt="Card-img" /> <br />
                <div className="card--stats">
                <img src={star}/>
                <span>{props.rating} </span>
                <span className='light'>({props.reviewCount})•</span>
                <span className='light'> {props.Country}</span>
                </div>
                <p>{props.title}</p>
                <p>From <span className='bold'>${props.Price}</span> / person</p>
            </div>
        </div>    
    </>
)
}

export default Card