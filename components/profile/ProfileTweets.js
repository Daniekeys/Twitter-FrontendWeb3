import React from 'react'
import Post from '../Post'
import { useContext, useEffect, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

// const tweets = [
//   {
//     displayName: 'Qazi',
//     userName: '68cjkdf7dfdf7xc',
//     avatar:
//       'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
//     text: 'good morning',
//     isProfileImageNft: false,
//     timestamp: '2020-06-01t12:00:00.000Z',
//   },
//   {
//     displayName: 'Qazi',
//     userName: '68cjkdf7dfdf7xc',
//     avatar:
//       'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
//     text: 'good morning',
//     isProfileImageNft: false,
//     timestamp: '2020-06-01t12:00:00.000Z',
//   },
//   {
//     displayName: 'Qazi',
//     userName: '68cjkdf7dfdf7xc',
//     avatar:
//       'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
//     text: 'good morning',
//     isProfileImageNft: false,
//     timestamp: '2020-06-01t12:00:00.000Z',
//   },
//   {
//     displayName: 'Qazi',
//     userName: '68cjkdf7dfdf7xc',
//     avatar:
//       'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
//     text: 'good morning',
//     isProfileImageNft: false,
//     timestamp: '2020-06-01t12:00:00.000Z',
//   },
//   {
//     displayName: 'Daniel',
//     userName: '68cjkdf7dfdf7xc',
//     avatar:
//       'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
//     text: 'good morning',
//     isProfileImageNft: false,
//     timestamp: '2020-06-01t12:00:00.000Z',
//   },
//   {
//     displayName: 'Qazi',
//     userName: '68cjkdf7dfdf7xc',
//     avatar:
//       'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png',
//     text: 'good morning',
//     isProfileImageNft: false,
//     timestamp: '2020-06-01t12:00:00.000Z',
//   },
// ]
const ProfileTweet = () => {
 const { currentUser, currentAccount } = useContext(TwitterContext)
 const [tweets, setTweets] =
   useState(
   [
     {
       timestamp: '',
       tweet: '',
     },
   ])
 const [author, setAuthor] =
   useState( {
     name: '',
     profileImage: '',
     walletAddress: '',
     isProfileImageNft: undefined,
   })

 useEffect(() => {
   if (!currentUser) return

   setTweets(currentUser.tweets)
   setAuthor({
     name: currentUser.name,
     profileImage: currentUser.profileImage,
     walletAddress: currentUser.walletAddress,
     isProfileImageNft: currentUser.isProfileImageNft,
   })
 }, [currentUser])

  return (
   <div className={style.wrapper}>
      {
        tweets?.map((tweet, index) => {
          return <Post key={index} tweet={tweet}
              displayName={currentUser.name === 'Unnamed' ? currentUser.walletAddress : currentUser.name}
              userName={`${currentAccount.slice(0, 5)}...${currentAccount.slice(-5)}`}
              avatar={currentUser?.profileImage}
              text={tweet.tweet}
              isProfileImageNft={tweet?.isProfileImageNft}
              timestamp={tweet.timestamp}
          
          />
        }
        )}
     </div>
  )
}

export default ProfileTweet