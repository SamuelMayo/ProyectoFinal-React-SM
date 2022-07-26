import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'
import ItemDescription from '../Components/ItemDescription.jsx'
import {db} from '../firebase/firebase.js'
import {getDoc, collection, doc } from 'firebase/firestore'



const ItemListContainer = () => {

  const {itemId}=useParams()

  const [loading, setLoading] = useState(false)
  const [product, setProduct]= useState({})

  useEffect(()=>{

    setLoading(true)
    const productCollection= collection(db, 'productos')
    const refDoc= doc(productCollection, `${itemId}`)
    getDoc(refDoc)
    .then(result=>{
      const prod = {
        id: result.id ,
        ...result.data()
      }
      setProduct(prod);
      console.log(result.data());
    })
    .catch(err=>console.log(err))
    .finally(()=>{
      setLoading(false)
    })

  },[itemId] )


    return (
    <div className='w-full flex flex-col items-center'>

        {loading ? <ClimbingBoxLoader /> : <ItemDescription product={product} />}
      
    </div>
  )
}

export default ItemListContainer