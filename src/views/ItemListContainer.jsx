import { ponyfillGlobal } from '@mui/utils'
import React, {useEffect,useState} from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import ItemList from '../Components/ItemList'



const ItemListContainer = ({mensaje}) => {

  const [loading, setLoading] = useState(false)

  const [product, setProduct]= useState([])

  useEffect(()=>{
    
    async function resultPromise(){
      
      setLoading(true)
      try{
        const response= await fetch('https://api.escuelajs.co/api/v1/products');
        const result = await response.json();
        setProduct(result)
      }
      catch(err){
        console.log(err);
        alert("Ha ocurrido un error")
      }
      finally{
        setLoading(false)
      }
      
    }
    resultPromise()

  },[] )


    return (
    <div className='w-full flex flex-col items-center'>
        <h2>{mensaje}</h2>
        {loading ? <ClimbingBoxLoader /> : <ItemList products={product} />}
      
    </div>
  )
}

export default ItemListContainer