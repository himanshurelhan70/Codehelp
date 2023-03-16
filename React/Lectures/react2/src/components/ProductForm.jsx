import { useState } from "react";
import '../css/ProductForm.css'

export default function ProductForm({newProductHandler}) {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

    function priceChangeHandler(event){
        setPrice(event.target.value);
        // console.log("wrong ouput", title, date, price);
    }

    // console.log("correct output", title, date, price);

    function formSubmitHandler(event){
        event.preventDefault();

        const newProduct = {
            title: title,
            date: new Date(date),
            price: price
        }

        console.log("sending newProduct data form child(ProductForm) to parent(App)");

        newProductHandler(newProduct);

        setTitle('');
        setDate('');
        setPrice('');
    }

    return (
        <form onSubmit={formSubmitHandler} className="product-form">
            <div className="form-group">
                <label htmlFor="product-form-title">Title</label>
                <input 
                type="text" 
                id="product-form-title" 
                value={title}
                onChange={titleChangeHandler} />
            </div>

            <div className="form-group">
                <label htmlFor="product-form-date">Date</label>
                <input 
                type="date" 
                id="product-form-date" 
                value={date}
                onChange={dateChangeHandler}/>
            </div>

            <div className="form-group">
                <label htmlFor="product-form-price">Price</label>
                <input 
                type="number" 
                id="product-form-price" 
                value={price}
                onChange={priceChangeHandler} />
            </div>

            <div>
                <button type="submit"  className="form-btn">Add Product</button>
            </div>
        </form>
    )
}
