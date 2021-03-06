

import { useContext, useEffect, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'
// import Modal from 'react-modal'
// import ProfileImageMinter from './mintingModal/ProfileImageMinter'
// import { customStyles } from '../../lib/constants'
const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}
const ProfileHeader = () => {
 const { currentAccount, currentUser } = useContext(TwitterContext);
//  console.log(currentUser);
 const router = useRouter();
 const [userData, setUserData] =
   useState (
   {
     name: '',
     profileImage: '',
     coverImage: '',
     walletAddress: '',
     tweets: [],
     isProfileImageNft: undefined,
   })

 useEffect(() => {
   if (!currentUser) return

   setUserData({
     name: currentUser.name,
     profileImage: currentUser.profileImage,
     walletAddress: currentUser.walletAddress,
     coverImage: currentUser.coverImage,
     tweets: currentUser.tweets,
     isProfileImageNft: currentUser.isProfileImageNft,
   })
 }, [currentUser])

  // const currentAccount = '34394938489834bv38949c3nn4';
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div onClick={() => router.push('/')} className={style.backButton}>
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}>
            {currentUser.name === 'Unnamed'
              ? currentUser.walletAddress
              : currentUser.name}
          </div>
          <div className={style.secondary}>
            {currentUser?.tweets?.length} tweets
          </div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          // src={currentUser.coverImage}
          src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614142122/DANIKEYS_LOGO-removebg-preview_q4fcus.png"
          alt="cover"
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          // className={style.profileImageContainer}
          className={
            currentUser.isProfileImageNft ? 'hex' : style.profileImageContainer
          }
        >
          <img
            src={currentUser.profileImage}
            // src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1644901682/img-3_obgzz6.png"
            alt={currentUser.walletAddress}
            alt="profile"
            // className={style.profileImage}
            className={
              currentUser.isProfileImageNft
                ? style.profileImageNft
                : style.profileImage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>
            {currentUser.name === 'Unnamed'
              ? currentUser.walletAddress
              : currentUser.name}
          </div>
        </div>
        <div className={style.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
            </>
          )}
        </div>
      </div>
      <div className={style.nav}>
        <div className={style.activeNav}>Tweets</div>
        <div>Tweets & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  )
}

export default ProfileHeader