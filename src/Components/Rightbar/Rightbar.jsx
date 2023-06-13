import React from 'react';
import './rightbar.css';

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='box'>
        <div className='header'>
          <h3>Add to your feed</h3>
          <a href=''><i class="fa-solid fa-circle-exclamation"></i></a>
        </div>
        <div className='list'>
            <a href='' className='content'>
              <div className='left'>
                <img src='/assets/dp9.jpg' alt='dp pic'></img>
              </div>
              <div className='right'>
                  <p className='first'>Audrey Gomez</p>
                  <p className='second'>Fashion Designer | Cat lover 🐱</p>
                  <button className='follow'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    <p>Follow</p>
                  </button>
              </div>
            </a>
            <a href='' className='content'>
              <div className='left'>
                <img src='/assets/dp9.jpg' alt='dp pic'></img>
              </div>
              <div className='right'>
                  <p className='first'>Audrey Gomez</p>
                  <p className='second'>Fashion Designer | Cat lover 🐱</p>
                  <button className='follow'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    <p>Follow</p>
                  </button>
              </div>
            </a>
            <a href='' className='content'>
              <div className='left'>
                <img src='/assets/dp9.jpg' alt='dp pic'></img>
              </div>
              <div className='right'>
                  <p className='first'>Audrey Gomez</p>
                  <p className='second'>Fashion Designer | Cat lover 🐱</p>
                  <button className='follow'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    <p>Follow</p>
                  </button>
              </div>
            </a>
        </div>
        <div className='bottom'>
            <a href=''>View all recommendations <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div className='down'>
        <div className='head'>
          <a href=''>Ad</a>
          <a href=''><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 6.625C1.01675 6.625 0.625 7.01675 0.625 7.5C0.625 7.98325 1.01675 8.375 1.5 8.375C1.98325 8.375 2.375 7.98325 2.375 7.5C2.375 7.01675 1.98325 6.625 1.5 6.625ZM5.5 6.625C5.01675 6.625 4.625 7.01675 4.625 7.5C4.625 7.98325 5.01675 8.375 5.5 8.375C5.98325 8.375 6.375 7.98325 6.375 7.5C6.375 7.01675 5.98325 6.625 5.5 6.625ZM9.5 6.625C9.01675 6.625 8.625 7.01675 8.625 7.5C8.625 7.98325 9.01675 8.375 9.5 8.375C9.98325 8.375 10.375 7.98325 10.375 7.5C10.375 7.01675 9.98325 6.625 9.5 6.625ZM12.625 7.5C12.625 7.01675 13.0168 6.625 13.5 6.625C13.9832 6.625 14.375 7.01675 14.375 7.5C14.375 7.98325 13.9832 8.375 13.5 8.375C13.0168 8.375 12.625 7.98325 12.625 7.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a>
        </div>
        <p>Phantom, bost your job search with Premium</p>
        <div className='mid'>
          <img src='/assets/acc.png' alt='dp pic'></img>
          <i class="fa-brands fa-linkedin"></i>
        </div>
        <p>See who's viewed your profile in the last 90 days</p>
        <a href=''>Try for free!</a>
      </div>
    </div>
  )
}

export default Rightbar;
