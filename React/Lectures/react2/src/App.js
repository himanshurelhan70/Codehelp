import './App.css';
import Products from './components/Products.jsx';

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

  return (
    <div className="App">
      <Products products={response}></Products>
    </div>
  );
}

export default App;
