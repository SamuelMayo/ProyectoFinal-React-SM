import { ponyfillGlobal } from '@mui/utils'
import React, {useEffect,useState} from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import ItemList from '../Components/ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({mensaje}) => {
  
  const {categoryId}= useParams()
  

  const [loading, setLoading] = useState(false)
  const [product, setProduct]= useState([])

  const URL= categoryId ? `https://api.escuelajs.co/api/v1/categories/${categoryId}/products` : 'https://api.escuelajs.co/api/v1/products';
  useEffect(()=>{
    async function resultPromise(){
      setLoading(true)
      try{
        const response= await fetch(URL);
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

  },[categoryId] )

    return (
    <div className='w-full flex flex-col items-center'>
        <h2>{mensaje}</h2>
        {loading ? <ClimbingBoxLoader /> : <ItemList products={product} />}
      
    </div>
  )
}

export default ItemListContainer