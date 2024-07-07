import React from 'react'
import HomeHeader from '@/components/HomeHeader'
import Image from 'next/image'
import HomeSeacrch from '@/components/HomeSeacrch'
const Page= () => {
  return (
    <>
    
    <HomeHeader/>
    <div className='flex flex-col items-center m-24'>
    <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          alt='Google Logo'
          width={300}
          height={100}
          priority
          style={{width:'auto',height:'auto'}}
          
        />
        <HomeSeacrch/>
    </div>
    
    </>
  )
}

export default Page