import React from 'react';
import './leftbar.css';

function Leftbar() {
  return (
    <div className='leftbar'>
      <div className='left'>
        <div className='box'>
          <div className='top'>
            <div className='images'>
              <img className='bg' src='/assets/bg.png' alt='Dp'></img>
              <img className='dp' src='/assets/acc.png' alt='Profile picture'></img>
            </div>
            <div className='txt'>
              <h2>Victory Odumeh</h2>
              <p>Full-Stack Developer</p>
            </div>
          </div>
          <div className='mid'>
            <div className='stats'>
              <div className='align'>
                <a href=''>Who's viewed your profile?</a>
                <p>15</p>
              </div>
              <div className='align'>
                <a href=''>Impressions of your post</a>
                <p>6</p>
              </div>
            </div>
            <div className='s'>
                <p>Access exclusive tools and insights</p>
                <div className='lk'>
                  <div className='sm-box'></div>
                  <a href=''>Get Hired Faster, Try Premium</a>
                </div>
            </div>
          </div>
          <a href='' className='btm'>
            <i className="fa-solid fa-bookmark"></i>
            <p>My items</p>
          </a>
        </div>
      </div>
      <div className='right'>
        <div className='box'>
          <div className='recent'>
            <p>Recent</p>
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </div>
          <div className='groups'>
            <a href=''>Groups</a>
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </div>
          <div className='events'>
            <a href=''>Events</a>
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </div>
          <div className='follow'>
            <a href=''>Followed Hashtags</a>
          </div>
          <div className='more'>
            <a href=''>Discover more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar;
