import React, { useState } from 'react';
import Post from '../Post/Post';
import './feed.css';

function Feed() {

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
        role: "Blockchain Developer @ Brimble hq | Guitar freak 🎸",
        isFollow: false
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
        role: "Product Designer || Project Manager.",
        isFollow: false
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
        role: "Photographer | Tourist",
        isFollow: false
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
        role: "Lead Architect @ HKS.",
        isFollow: false
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
        role: "Human (Male) Activist",
        isFollow: false
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
        role: "Fashion Designer at Louis Vuitton",
        isFollow: false
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
        role: "Video Editor | Movie Director",
        isFollow: false
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
        role: "Software Engineer || Backend Developer || MERN Stack",
        isFollow: false
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
        role: "---",
        isFollow: false
    }
  ])



  return (
    
    <div className='feed'>
      <Post feeds={feeds}></Post>
    </div>
  )
}

export default Feed;
