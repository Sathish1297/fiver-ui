import React from 'react'
import './GigCard.scss'
import star from '../../assets/star.png'
import heart from '../../assets/heart.png'
import { Link } from 'react-router-dom'

const GigCard = ({item}) => {
  return (
    <Link to='/gig/123' className='link'>
        <div className='gigCard'>
            <img src={item.img} alt="" />
            <div className="info">
                <div className="user">
                    <img src={item.pp} alt="" />
                    <span>{item.username}</span>
                </div>
                <p>{item.desc}</p>
                <div className="star">
                    <img src={star} alt="star" />
                    <span>{item.star}</span>
                </div>
            </div>
            <hr />
            <div className="details">
                <img src={heart} alt="heart" />
                <div className="price">
                    <span>Starting at</span>
                    <h2> Rs.{item.price}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default GigCard