import React, { useState } from 'react'
import './post.css'

function Post({feeds}) {
const [outsideindex, setoutsideindex]=useState(1)
const [follow, setFollow]=useState('+ Follow')

const isFollow = (e) => {
  e.preventDefault()  
  setFollow((currentState) => currentState ='✔️ Following');
}
  return (
    <div>
    <div className='post'>
        <div className='top'>
          <img src='/assets/acc.png' alt='dp profile'></img>
          <input itemType='submit' placeholder='Start a post'></input>
        </div>
        <div className='bottom'>
          <ul>
            <li>
              <a href=''>
                <i className="fa-solid fa-image"></i> 
                <p>Photo</p>
              </a>
            </li>
            <li>
              <a href=''>
                <i className="fa-brands fa-youtube"></i> 
                <p>Video</p>
              </a>
            </li>
            <li>
              <a href=''>
                <i className="fa-solid fa-calendar-week"></i>
                <p>Event</p>
              </a>
            </li>
            <li>
              <a href=''>
                <i className="fa-solid fa-newspaper"></i>
                <p>Write article</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='sort'>
        <div className='line'></div>
        <p>Sort by: Top <i className="fa-solid fa-sort-down"></i></p>
      </div>
      
        {feeds.map((feed, index) => (
          <div className='postFeed' key={index}>
            <div className='head'>
            <a href='' className='left'>
              <img src='/assets/dp/dp9.jpg' alt='dp'></img>
              <a href=''>Gabriella Stones</a><p>likes this</p>
            </a>
            <div className='right'>
              <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

              <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
          </div>
          <div className='h-line'></div>
          <div className='top'>
            <div className='postCreator'>
              <div className='l'>
                <img src={feed.profilePicture} alt='dp'></img>
                <div className='circle'></div>
              </div>
              <div className='r'>
                <div className='text'>
                    <a href='' className='first'>{feed.username}  <span><i className="fa-solid fa-circle"></i>  {feed.rank}</span></a>
                    <a href='' className='second'>{feed.role}</a>
                    <a href='' className='third'>1m.<i className="fa-solid fa-earth-americas"></i></a>
                </div>
                <div className='follow' onClick={isFollow}>
                    <a href=''>
                      <p>{follow}</p>
                    </a>
                </div>
              </div>
            </div>
            <div className='comment'>
              <p>{feed.comment}</p>
            </div>
          </div>
          <div className='bottom'>
            <img src={feed.post} alt='A Post'></img>
          </div>
          <div className='stats'>
            <p>
              <i className="fa-solid fa-thumbs-up"></i><a href=''>Mimi Henandez </a> and {feed.like} others
            </p>
          </div>
          <div className='line'></div>
          <div className='reactions'>
            <ul>
              <li>
                <a href=''>
                  <i className="fa-solid fa-thumbs-up"></i>
                  <p>Like</p> 
                  <p>0</p>
                </a>
              </li>
              <li>
                <a href=''>
                  <i className="fa-solid fa-message"></i>
                  <p>Comment</p>
                </a>
              </li>
              <li>
                <a href=''>
                  <i className="fa-solid fa-repeat"></i>
                  <p>Repost</p>
                </a>
              </li>
              <li>
                <a href=''>
                  <i className="fa-solid fa-paper-plane"></i>
                  <p>Send</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        ))}
        </div>
  )
}

export default Post
