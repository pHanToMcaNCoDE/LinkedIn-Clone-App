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
            <i class="fa-solid fa-bookmark"></i>
            <p>My items</p>
          </a>
        </div>
      </div>
      <div className='right'>
        <div className='box'></div>
      </div>
    </div>
  )
}

export default Leftbar;
