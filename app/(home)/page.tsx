import Link from "next/link";

const API_URL = "https://billions-api.nomadcoders.workers.dev/"

async function getBillions() {
  return fetch(API_URL).then(res => res.json())
}

async function Home() {
  const billions = await getBillions();

  return (
    <div className='billionaire_list'>
      {billions.map(it => (
        <Link href={`person/${it.id}`} className='billionaire_wrapper'>
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