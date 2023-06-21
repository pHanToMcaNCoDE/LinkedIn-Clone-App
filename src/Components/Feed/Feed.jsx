import React, { useState } from 'react';
import './feed.css';

function Feed() {

  const [change, setChange] = useState('+ Follow');
  const [count, setCount] = useState(0);
  const [feeds, setFeeds] = useState([
    {
        id: 1,
        comment: "Just In! Mac setup with an M2 ultra studio on its way! 🔥",
        post: "/assets/post/post.jpg",
        time: "1m",
        like: 1234,
        rank: "3rd",
        profilePicture: '/assets/dp/dp.jpg',
        username: "Idris Beckhamp",
        role: "Blockchain Developer @ Brimble hq | Guitar freak 🎸"

    },
    {
        id: 2,
        comment: "You have to put in the work. No pain 😫 No gain! 💪🏼",
        post: "/assets/post/post2.jpg",
        time: "9d",
        like: 98,
        rank: "1st",
        profilePicture: '/assets/dp/dp2.jpg',
        username: "Lizzy Brown",
        role: "Product Designer || Project Manager."
    },
    {
        id: 3,
        comment: "Look at that view!!!",
        post: "/assets/post/post3.jpg",
        time: "14m",
        like: 1,
        rank: "2nd",
        profilePicture: '/assets/dp/dp3.jpg',
        username: "Jennifer Jones",
        role: "Photographer | Tourist"
    },
    {
        id: 4,
        comment: "Really, Belgium is built different 💯.",
        post: "/assets/post/post4.jpg",
        time: "34m",
        like: 34,
        rank: "2nd",
        profilePicture: '/assets/dp/dp4.jpg',
        username: "Kate Wright",
        role: "Lead Architect @ HKS."
    },
    {
        id: 5,
        comment: "Consistency is key. You must stay focus and don't give up. You'll get to the top. Stay strong guys!",
        post: "/assets/post/post5.jpg",
        time: "4m",
        rank: "5th",
        like: 1234,
        profilePicture: '/assets/dp/dp5.jpg',
        username: "Tory Vega",
        role: "Human (Male) Activist"
    },
    {
        id: 6,
        comment: "Black is bold. Black is King!",
        post: "/assets/post/post6.jpg",
        time: "3w",
        like: 0,
        rank: "1st",
        profilePicture: '/assets/dp/dp6.jpg',
        username: "J. J. Luiz",
        role: "Fashion Designer at Louis Vuitton"
    },
    {
        id: 7,
        comment: "Filming in session!",
        post: "/assets/post/post7.jpg",
        time: "5d",
        like: 4,
        rank: "3rd",
        profilePicture: '/assets/dp/dp7.jpg',
        username: "Rio Sanchez",
        role: "Video Editor | Movie Director"
    },
    {
        id: 8,
        comment: "My wife and I had a great session today. The topic for tonight's session will be revealed soon, Get ready 🔥 🤩.",
        post: "/assets/post/post8.jpg",
        time: "14h",
        like: 2400,
        rank: "2nd",
        profilePicture: '/assets/dp/dp8.jpg',
        username: "David Samuel Smith",
        role: "Software Engineer || Backend Developer || MERN Stack"
    },
    {
        id: 9,
        comment: "What a great day to hang out with friends and loved ones!",
        post: "/assets/post/post9.jpg",
        time: "3m",
        like: 94,
        rank: "4th",
        profilePicture: '/assets/dp/dp9.jpg',
        username: "Audrey Gomez",
        role: "---"
    }
  ])

  const isCount = (e) =>{
    e.preventDefault();
    setCount((currentNumber) => currentNumber + 1);
  }


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
      <div className='sort'>
        <div className='line'></div>
        <p>Sort by: Top <i class="fa-solid fa-sort-down"></i></p>
      </div>
      
        {feeds.map((feed) => (
          <div className='postFeed' key={feed.id}>
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
          <div className='line'></div>
          <div className='top'>
            <div className='postCreator'>
              <div className='l'>
                <img src={feed.profilePicture} alt='dp'></img>
                <div className='circle'></div>
              </div>
              <div className='r'>
                  <a href='' className='first'>{feed.username}<span><i class="fa-solid fa-circle"></i>  {feed.rank}</span></a>
                  <a href='' className='second'>{feed.role}</a>
                  <a href='' className='third'>1m.<i class="fa-solid fa-earth-americas"></i></a>
                <div className='follow'>
                  <a href='' onClick={(e) => {
                    e.preventDefault();
                    setChange('✓ Following')}}>
                    <p>{change}</p>
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
              <i class="fa-solid fa-thumbs-up"></i><a href=''>Mimi Henandez </a> and {feed.like} others
            </p>
          </div>
          <div className='line'></div>
          <div className='reactions'>
            <ul>
              <li>
                <a href='' onClick={isCount}>
                  <i class="fa-solid fa-thumbs-up"></i>
                  <p>Like</p> 
                  <p>{ count }</p>
                </a>
              </li>
              <li>
                <a href=''>
                  <i class="fa-solid fa-message-dots"></i>
                  <p>Comment</p>
                </a>
              </li>
              <li>
                <a href=''>
                  <i class="fa-solid fa-repeat"></i>
                  <p>Repost</p>
                </a>
              </li>
              <li>
                <a href=''>
                  <i class="fa-solid fa-paper-plane"></i>
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

export default Feed;
