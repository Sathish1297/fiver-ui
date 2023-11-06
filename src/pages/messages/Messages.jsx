import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import message from '../../assets/message.png'
import './messages.scss'

function Messages() {

  const [] = useState();

  const currentUser = {
    id:1,
    userName: "Naruto",
    isSeller: true
  }

  const msg = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor minima officiis numquam voluptatibus laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos eaque adipisci, unde repudiandae, assumenda id, quis vero aperiam repellat odit asperiores. Sequi, rerum est. Sapiente tempora molestiae magnam fuga.'

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>Deepak</td>
            <td><Link to='/message/123' className='link'>{msg.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td><button>Mark as read</button></td>
          </tr>
          <tr className='active'>
            <td>Jayanth</td>
            <td><Link to='/message/123' className='link'>{msg.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td><button>Mark as read</button></td>
          </tr>
          <tr>
            <td>Varsh</td>
            <td><Link to='/message/123' className='link'>{msg.substring(0,100)}...</Link></td>
            <td>2 day ago</td>
          </tr>
          <tr>
            <td>Deepak</td>
            <td><Link to='/message/123' className='link'>{msg.substring(0,100)}...</Link></td>
            <td>4 day ago</td>
          </tr>
          <tr>
            <td>Deepak</td>
            <td><Link to='/message/123' className='link'>{msg.substring(0,100)}...</Link></td>
            <td>5 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages
