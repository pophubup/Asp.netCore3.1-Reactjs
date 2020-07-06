import React from 'react';
import logo from './logo.svg';
import { useForm } from '../src/components/shareFuncations/useForm';
import { FetchProducts, SaveProducts } from '../src/components/shareFuncations/useFetch'
import './App.css';

const App = () => {
   const [values, handleChange] = useForm({ 
    productId :'P0001',
    productName :'Beef',
    productPrice :'333',
    productDescription :'444',
    productQuantity :'333',
    productImage :'44',
    categoryId :'1'})
  const {data, loading } = FetchProducts("http://localhost:5000/api/Home/Index", null)
  const {data2, loading2 } = FetchProducts("http://localhost:5000/api/Home/Index", values)
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
              <input
                  type="text"
                  name="ProductId"
                  value={values.ProductId}
                  onChange={handleChange}
              />
              <input
                  type="text"
                  name="productPrice"
                  value={values.ProductPrice}
                  onChange={handleChange}
              />
              <label style={{ color: "white", display: "inline-flex" }}> <b>Email :</b><b>{values.email}</b></label>
          </header>
          
          
    </div>
  );
}

export default App;
