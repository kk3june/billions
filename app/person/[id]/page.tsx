'use client'
import { useEffect, useState } from "react"
import { API_URL } from "../../lib/\bconstants"


function Person({params: {id}}: {params:{id: string}}) {
  const [billionaire, setbillionaire] = useState<any>()
 
  useEffect(() => {
    fetch(`${API_URL}/person/${id}`)
      .then(res => res.json())
      .then(data => setbillionaire(data))
  }, [])
 
  if (!billionaire) return <div>Loading...</div>
 
  return (
    <div className="p-4">
      <div className="flex mb-4">
        <img src={billionaire.squareImage} alt={billionaire.name} className="w-32 h-32 rounded-lg" />
      </div>
      
      <h1 className="text-2xl font-bold mb-2">{billionaire.name}</h1>
      
      <div className="space-y-2 mb-4">
        <div>Networth: {Math.round(billionaire.netWorth/1000)} Billion</div>
        <div>Country: {billionaire.country}</div>
        <div>Industry: {billionaire.industries.join(', ')}</div>
        <p className="text-sm text-gray-600 mt-4">
          {billionaire.bio.join(' ')}
        </p>
      </div>
 
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Financial Assets</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {billionaire.financialAssets.map((asset, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div>Ticker: {asset.ticker}</div>
              <div>Shares: {asset.numberOfShares.toLocaleString()}</div>
              {asset.exerciseOptionPrice && 
                <div>Exercise Price: ${asset.exerciseOptionPrice}</div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
 }
 
 export default Person