import React, {useEffect,useState} from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import ItemList from '../Components/ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../firebase/firebase.js'
import {getDocs, collection, query, where } from 'firebase/firestore'



const ItemListContainer = ({mensaje}) => {
  
  const {categoryName}= useParams()
  

  const [loading, setLoading] = useState(false)
  const [product, setProduct]= useState([])


  useEffect(()=>{

    setLoading(true)
    const productCollection= collection(db, 'productos')
    const q = query(productCollection, where('category', '==', `${categoryName}` ))
    const filter= categoryName ? q : productCollection ;

    getDocs(filter)
    .then(result=>{
      const list= result.docs.map(doc=>{
        return {
          id: doc.id,
          ...doc.data(),
        }
        
      })
      setProduct(list)
    })
    .catch(err=> console.log(err))  
    .finally(()=>setLoading(false))
    
    
  },[categoryName] )

    return (
    <div className='w-full flex flex-col items-center'>
        <h2>{mensaje}</h2>
        {loading ? <ClimbingBoxLoader /> : <ItemList products={product} />}
      
    </div>
  )
}

export default ItemListContainer