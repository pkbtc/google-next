'use client'

import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeaderOptions from './SearchHeaderOptions';
const HomeSeacrch = () => {
    const [input,setInput]=useState('');
    const [randomSearchLoadig,setRandomSearchLoadig]=useState(false);
    const router=useRouter();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!input.trim()){
            return;
        }
        router.push(`/search/web/?searchTerm=${input}`);
        
    }
    const randomSearch=async(e)=>{
        setRandomSearchLoadig(true);
            const respones=await fetch(`https://random-word-api.herokuapp.com/word`).then((res)=>res.json()).then((data)=>data[0]);
            if(!respones){
                return
            }
            router.push(`/search/web/?searchTerm=${respones}`);
            setRandomSearchLoadig(false);
    }
  return (
    <>
    
    <from className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
    onsubmit={handleSubmit}
      >
    <CiSearch className='text-xl text-gray-500 mr-3' />
        <input type="text" className='flex-grow focus:outline-none' 
        onChange={(e)=>setInput(e.target.value)}
        />
    <FaMicrophone className='text-lg'/>
    </from>
    <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8' >
        <button className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow' 
            onClick={handleSubmit}
          >Google Search</button>
        <button    disabled={randomSearchLoadig} className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow' onClick={randomSearch}>
            {randomSearchLoadig?'Loading...' :'I am feeling Lucky'}
        </button>
    </div>
    </>
  )
}

export default HomeSeacrch