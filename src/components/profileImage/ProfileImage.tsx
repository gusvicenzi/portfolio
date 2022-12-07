import React from 'react'
import './profileImage.scss'

interface Props {
  imgUrl: string
}
export const ProfileImage: React.FC<Props> = ({ imgUrl }) => {
  return (
    <div className='container'>
      {/* <img src={require(imgUrl)} alt='Profile' /> */}
      <div className='background' />
      <img src={imgUrl} alt='Profile' />
    </div>
  )
}