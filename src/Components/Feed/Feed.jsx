import React from 'react';
import './feed.css';

function Feed() {
  return (
    <div className='feed'>
      <div className='post'>
        <div className='top'>
          <img src='/assets/acc.png' alt='dp profile'></img>
          <input itemType='submit' placeholder='Start a post'></input>
        </div>
        <div className='bottom'>
          <ul>
            <li>
              <a href=''>
                <i class="fa-solid fa-image"></i> 
                <p>Photo</p>
              </a>
            </li>
            <li>
              <a href=''>
                <i class="fa-brands fa-youtube"></i> 
                <p>Video</p>
              </a>
            </li>
            <li>
              <a href=''>
                <i class="fa-solid fa-calendar-week"></i>
                <p>Event</p>
              </a>
            </li>
            <li>
              <a href=''>
                <i class="fa-solid fa-newspaper"></i>
                <p>Write article</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
        <h1>Feed</h1>
    </div>
  )
}

export default Feed;
