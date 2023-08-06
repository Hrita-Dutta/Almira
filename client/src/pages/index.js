import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import { useEffect,useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [productsList,setProductsList] = useState([])
  const [age,setAge] = useState(34)

  const fetchAllProducts = async() => {
    const res = await fetch('http://localhost:8080/products')
    const data = await res.json()
    setProductsList(data.productsList)
  }


  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <>
    <Navbar/>
    <div>
      {
        productsList.length > 0 ? (
          <div>
            {productsList.map((item) => (
              <div>
                {item.productName}
                {item.productPrice}
              </div>
            ))}
          </div>
        )
          : "loading"
      }
    </div>
    </>
  )
}
