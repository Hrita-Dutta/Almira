import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import { useEffect,useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [name,setName] = useState('ram')
  const [age,setAge] = useState(34)

  const fetchAllProducts = () => {

  }


  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <>
    <Navbar/>
    {name} ***** {age}
    <button className=' bg-yellow-500'
    onClick={()=>setName(Math.random())}
    >Click me</button>
    <button className=' bg-lime-500'
    onClick={()=>setAge(Math.random())}
    >change age</button>
    </>
  )
}
