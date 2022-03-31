import React from 'react'
import { useContext, useEffect } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
  wrapper: `flex-[2] border-r border-l scroll-hide overflow-y-scroll border-[#38444d] `,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName:'Qazi',
    userName:'68cjkdf7dfdf7xc',
    avatar:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
    text:'good morning',
    isProfileImageNft:false,
    timestamp:'2020-06-01t12:00:00.000Z',
  },
  {
    displayName:'Qazi',
    userName:'68cjkdf7dfdf7xc',
    avatar:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
    text:'good morning',
    isProfileImageNft:false,
    timestamp:'2020-06-01t12:00:00.000Z',
  },
  {
    displayName:'Qazi',
    userName:'68cjkdf7dfdf7xc',
    avatar:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
    text:'good morning',
    isProfileImageNft:false,
    timestamp:'2020-06-01t12:00:00.000Z',
  },
  {
    displayName:'Qazi',
    userName:'68cjkdf7dfdf7xc',
    avatar:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
    text:'good morning',
    isProfileImageNft:false,
    timestamp:'2020-06-01t12:00:00.000Z',
  },
  {
    displayName:'Daniel',
    userName:'68cjkdf7dfdf7xc',
    avatar:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
    text:'good morning',
    isProfileImageNft:false,
    timestamp:'2020-06-01t12:00:00.000Z',
  },
  {
    displayName:'Qazi',
    userName:'68cjkdf7dfdf7xc',
    avatar:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
    text:'good morning',
    isProfileImageNft:false,
    timestamp:'2020-06-01t12:00:00.000Z',
  },
]

const Feed = () => {
    const { tweets } = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === 'Unnamed'
              ? `${tweet.author.walletAddress.slice(
                  0,
                  4
                )}...${tweet.author.walletAddress.slice(41)}`
              : tweet.author.name
          }
          userName={`${tweet.author.walletAddress.slice(
            0,
            4
          )}...${tweet.author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={tweet.author.profileImage}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed