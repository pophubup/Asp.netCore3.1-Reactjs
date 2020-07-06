import {useEffect, useState} from 'react'
import axios from 'axios'

export const FetchProducts =(url,data)=>{
    const [state, setState] = useState({data:null, loading:false});
    useEffect(() => {

        setState({data:null, loading : true})

        if(data == null){

            axios.get(url).then(x=>{
                setState({data:x.data, loading:false});
                console.log(x.data)
            })
            
        }else{

           axios.post(url,{"ProductId":data.productId, "ProductName": data.productName,"CategoryId" : data.categoryId}).then(x=>{
               setState({data:x.data, loading:false});
               console.log(x.data)
           })
           
        }

    },[url]);
    return state;
}

export const SaveProducts = (url,data) =>{
    const [state, setState] = useState({data:null, loading:false});
    axios.post(url,{ 
        "ProductId":data.productId, 
        "ProductName": data.productName,
        "ProductPrice" :data.productPrice,
        "ProductDescription" :data.productDescription,
        "ProductQuantity" : data.ProductQuantity,
        "ProductImage" :data.ProductImage,
        "CategoryId" : data.categoryId
    }).then(x=>{
        setState({data:x.data, loading:false});
        console.log(x.data)
    }).catch( x=>{
        console.log(x)
    })
   
}