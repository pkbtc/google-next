"use client"
import React from 'react'
import { useState ,useEffect} from 'react'
const CountryLookUp = () => {
    const [country,setCountry]=useState("Feching...");
    useEffect(()=>{
        const fetchContry=async()=>{
            const response=await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`).then((res)=>res.json()).then((data)=>data.country);
            if(!response){
                return;
            }
            setCountry(response);

        }
        fetchContry();
    },[]);
  return (
    <div>{country}</div>
  )
}

export default CountryLookUp