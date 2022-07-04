import { ponyfillGlobal } from '@mui/utils'
import React, {useEffect,useState} from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import ItemList from './ItemList'


const initialProducts=[
  {id:1, title: 'Chaqueta cross', description:'chaqueta de cuero sintetico de alta calidad', price:2500, imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3T1yPfenIZ2HbcPbc4MnGa241gmOKPXIQw&usqp=CAU'},
  {id:2, title: 'Camisa de vestir', description:'Camisa de vestir manga corta', price:3000, imgUrl:'https://http2.mlstatic.com/D_NQ_NP_780142-MLV43469766588_092020-O.jpg'},
  {id:3, title: 'Pantalon de vestir', description:'Pantanlon formal roberts', price:2800, imgUrl:'https://crm.enzofeldinistore.com/upload/93fa5581-d59d-a051-fae5-5ccdc7a41df6_imagen'},
  {id:4, title: 'Jogger Deportivo', description:'Jogger deportivo para hombre color olivo', price:1500, imgUrl:'https://sc02.alicdn.com/kf/Ud8b9d973902e4bbbac9c155b99f82ffc4/220949065/Ud8b9d973902e4bbbac9c155b99f82ffc4.jpg_.webp'},

  {id:1, title: 'Chaqueta cross', description:'chaqueta de cuero sintetico de alta calidad', price:2500, imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3T1yPfenIZ2HbcPbc4MnGa241gmOKPXIQw&usqp=CAU'},
  {id:2, title: 'Camisa de vestir', description:'Camisa de vestir manga corta', price:3000, imgUrl:'https://http2.mlstatic.com/D_NQ_NP_780142-MLV43469766588_092020-O.jpg'},
  {id:3, title: 'Pantalon de vestir', description:'Pantanlon formal roberts', price:2800, imgUrl:'https://cdn.roberts.com.mx/media/catalog/product/cache/2fa1a21d439308c27da4ad1a13a1b4d6/r/b/rb00151043-medium_parte_baja-raw-5.jpg'},
  {id:4, title: 'Jogger Deportivo', description:'Jogger deportivo para hombre color olivo', price:1500, imgUrl:'https://sc02.alicdn.com/kf/Ud8b9d973902e4bbbac9c155b99f82ffc4/220949065/Ud8b9d973902e4bbbac9c155b99f82ffc4.jpg_.webp'},

]

const promesa= new Promise((res, rej)=>{
  setTimeout(()=>{
    res(initialProducts);
  }, 2000)
})

const ItemListContainer = ({mensaje}) => {

  const [loading, setLoading] = useState(false)

  const [producto, setProducto]= useState([])

  useEffect(()=>{
    
    async function resultPromesa(){
      
      setLoading(true)
      const result= await promesa
      setProducto(result)
      setLoading(false)
      
    }
    resultPromesa()

  },[] )


    return (
    <div className='w-full flex flex-col items-center'>
        <h2>{mensaje}</h2>
        {loading ? <ClimbingBoxLoader /> : <ItemList products={producto} />}
      
    </div>
  )
}

export default ItemListContainer