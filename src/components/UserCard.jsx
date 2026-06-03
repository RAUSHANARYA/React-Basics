import React from 'react'
import download from '../assets/download.jpeg'
import './Usercard.css'


function UserCard(props) {
  return (
    <div className='userContainer'>
        <p id='tilte'>{props.name}</p>
        <img id='imageid' src={download} alt="#" />
        <p id='description '>Decription of image</p>
      
    </div>
  )
}

export default UserCard
