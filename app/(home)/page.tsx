'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const API_URL = "https://billions-api.nomadcoders.workers.dev/"

function Home() {
  const [billions, setBillions] = useState([]);
  
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setBillions(data));
  }, []);

  return (
    <div className='billionaire_list'>
      {billions.map(it => (
        <Link href={`person/${it.id}`} className='billionaire_wrapper' key={it.id}>
          <img src={it.squareImage} />
          <ul>
            <li>
              {it.name}
            </li>
            <li>
              {`${Math.round(it.netWorth/1000)} Billion / ${it.industries.join(' & ')}`}
            </li>
          </ul>
          
        </Link>
      ))}
    </div>
    
  )
}

export default Home