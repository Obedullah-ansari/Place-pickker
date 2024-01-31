import { useEffect, useState } from "react";
export default function Progressbar({timer}){
    const [remainingtime, setremainingtime]=useState(timer);
       
  useEffect(()=>{
    const interval=  setInterval(()=>{
        setremainingtime((prev)=>{
          prev-10
        })
       },10);
  
       return()=>{
        clearInterval(interval);
       };
    },[])
    return(  <progress value={remainingtime} max={timer} />);
}