import '../css/ProductItem.css';
import { useState } from 'react';
import ProductDate from './ProductDate';

export default function ProductItem({productInfo}) {
    // console.log(productInfo);
    let {title, price, date} = productInfo;
    
    const [newTitle, setNewTitle] = useState(title);

  return (
    <div className="product-item">
        <ProductDate date={date}></ProductDate>
        <h2>{newTitle}</h2>
        <p>{price}</p>
        <button onClick={()=> {setNewTitle('himanshu')}}>Add to Cart</button>
    </div>
  )
}
