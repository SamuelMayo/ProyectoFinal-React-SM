import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'
import ItemDescription from '../Components/ItemDescription.jsx'
import {db} from '../firebase/firebase.js'
import {getDocs, collection, where, query } from 'firebase/firestore'



const ItemListContainer = () => {

  const {itemId}=useParams()

  const [loading, setLoading] = useState(false)
  const [product, setProduct]= useState({})

  useEffect(()=>{

    setLoading(true) 
    const refDoc= query(collection(db, 'productos'), where('id' ,'==', +`${itemId}`))
    getDocs(refDoc)
    .then(result=>{
      const prod = {
        id: result.docs[0].id ,
        ...result.docs[0].data()
      }
      setProduct(prod);
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