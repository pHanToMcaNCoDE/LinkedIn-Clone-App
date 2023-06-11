import React from 'react';
import './topbar.css';

function Topbar() {
  return (
    <div className='topbar'>
      <div className='left'>
        <div className='container'>
          <i class="fa-brands fa-linkedin"></i>
          <div className='search'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input name="search" placeholder='Search'></input>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='l'>
            <a href='' className='content'>
              <i class="fa-solid fa-house"></i>
              Home
            </a>
            <a href='' className='content'>
              <i class="fa-solid fa-users"></i>
              My Network
            </a>
            <a href='' className='content'>
            <i class="fa-solid fa-suitcase"></i>
            Jobs
            </a>
            <a href='' className='content'>
            <i class="fa-solid fa-comment-dots"></i>
            Messaging
            </a>
            <a href='' className='content'>
              <i class="fa-solid fa-bell"></i>
              Notifications
            </a>
          <div className='account'>
            <img src='' alt=''></img>
            <div className='low'></div>
          </div>
        </div>
        <div className='r'>
          <div className='content'>
            <i class="fa-solid fa-grid"></i>
          </div>
          <div className='links'>
            <a href=''>Get Hired Faster,</a>
            <a href=''>Try Premium Free</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;
