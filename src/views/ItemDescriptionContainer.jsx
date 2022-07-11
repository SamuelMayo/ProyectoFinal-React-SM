import { ponyfillGlobal } from '@mui/utils'
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'
import ItemDescription from '../Components/ItemDescription.jsx'



const ItemListContainer = () => {

  const {itemId}=useParams()

  const [loading, setLoading] = useState(false)
  const [product, setProduct]= useState({})
  const URL = `https://api.escuelajs.co/api/v1/products/${itemId}`
  useEffect(()=>{
    async function resultPromise(){
      setLoading(true)
      try{
        const response= await fetch(URL);
        const result = await response.json();
        setProduct(result)
        setLoading(false)
      }
      catch(err){
        console.log(err);
        alert("Ha ocurrido un error")
      }
      
    }
    resultPromise()

  },[itemId] )

  console.log(itemId);
    return (
    <div className='w-full flex flex-col items-center'>

        {loading ? <ClimbingBoxLoader /> : <ItemDescription product={product} />}
      
    </div>
  )
}

export default ItemListContainer