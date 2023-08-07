import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import { useEffect,useState } from 'react'
import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [productsList,setProductsList] = useState([])

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
          <div className='flex justify-between flex-wrap p-3'>
            {productsList.map((item) => (
              <div className=' h-[300px] w-[300px] bg-lime-300 p-3 m-3'>
                <Image className='mx-auto' src="https://www.dealayo.com/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/h/a/hawkins-pressure-cooker-ceramic-coated-1-nepal.jpg" alt="hawkings cooker" width={150} height={100}/>
                {item.productName}
                {item.productPrice}
                <ShoppingCartIcon onClick={() => alert(item._id)} />
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


// {
//   favList: [],
//   cartList: []
// }

// reducers:{
//   addToCart(state, actions){
//     state.cartList
//   }
// }