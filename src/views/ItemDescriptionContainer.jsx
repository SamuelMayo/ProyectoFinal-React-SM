import { ponyfillGlobal } from '@mui/utils'
import React, {useEffect,useState} from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import ItemDescription from '../Components/ItemDescription.jsx'



const ItemListContainer = () => {

  const [loading, setLoading] = useState(false)

  const [product, setProduct]= useState({})

  useEffect(()=>{
    
    async function resultPromise(){
      setLoading(true)
      try{
        const response= await fetch('https://api.escuelajs.co/api/v1/products/63');
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

  },[] )


    return (
    <div className='w-full flex flex-col items-center'>

        {loading ? <ClimbingBoxLoader /> : <ItemDescription product={product} />}
      
    </div>
  )
}

export default ItemListContainer