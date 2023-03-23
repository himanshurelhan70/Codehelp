import './App.css';
import Products from './components/Products.jsx';
import ProductForm from './components/ProductForm';
import { useState } from 'react';

function App() {

  const response = [
    {
      id: "p1",
      title: "Maggie",
      price: 10,
      date: new Date(2023, 3, 17) //It's 17 april 2023 not 17 march 2023
    },
    {
      id: "p2",
      title: "Lays",
      price: 20,
      date: new Date(2023, 3, 15)
    },
    {
      id: "p3",
      title: "Kurkure",
      price: 20,
      date: new Date(2023, 1, 17)
    },
    {
      id: "p4",
      title: "Popcorn",
      price: 80,
      date: new Date(2023, 11, 17)
    },
  ]

  const [data, setData] = useState(response);

  // we passed this func as a prop to child component
  function newProductHandler(newProduct){
    console.log("received ", newProduct, "from child component(ProductForm)");

    // updating data
    setData([...data, newProduct]);
  }

  return (
    <div className="App">
      <ProductForm newProductHandler={newProductHandler}></ProductForm>
      <Products products={data}></Products>
    </div>
  );
}

export default App;
