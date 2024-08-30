import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import Navbar from '@/components/Navbar'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// Define the Coin interface
interface Coin {
  id: string
  name: string
  symbol: string
  current_price: number
}

const Market: React.FC = () => {
  // Initialize the chart data structure correctly
  const [chartData, setChartData] = useState({
    labels: [] as string[], // Empty array of strings for labels initially
    datasets: [
      {
        label: 'Current Price (USD)',
        data: [] as number[], // Empty array of numbers for data initially
        borderColor: '#00FF00',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderWidth: 2
      }
    ]
  })

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: Coin[] = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }
  
    fetchCryptoData()
  }, [])


  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          <h1 style={{ color: '#333', marginBottom: '20px' }}>Live Cryptocurrency Market</h1>
          <div
            style={{
              width: '80%',
              maxWidth: '800px',
              background: '#fff',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Market
