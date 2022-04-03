import { useState } from "react"

export default function ProductEditable({nr,list}){
    const [name, setName] = useState(list.name)
    const [supplier, setSupplier] = useState(list.supplier)
    const [wei, setSvoris] = useState(list.wei)
    const [country, setCountry] = useState(list.country)
    const [quantity, setQuantity] = useState(list.quantity)
    const [price, setPrice] = useState(list.price)
    const [total, setTotal] = useState(Math.round(list.price*list.quantity*100)/100)


    
    return(
        <div className="horizontal-holder">
            <h3 className="product-nr">{`${nr}.`}</h3>
            <li className="product">
                <div className="vertical-holder">
                    <label>Name:</label>
                    <input className="information" type="text"  value={name} />
                </div>
                <div className="vertical-holder">
                    <label>Supplier:</label>
                    <input className="information" type="text" value={supplier} />
                </div>
                <div className="vertical-holder">
                    <label>country:</label>
                    <input className="information" type="text" value={country} />
                </div>
                <div className="vertical-holder">
                    <label>Weight(grams):</label>
                    <input className="information" type="number" value={wei} />
                </div>
                <div className="vertical-holder">
                    <label>Quantity:</label>
                    <input className="information" type="number" value={quantity} />
                </div>
                <div className="vertical-holder">
                    <label>Price (eur):</label>
                    <input className="information" type="number" value={price} />
                </div>
                <div className="vertical-holder">
                    <label>Total (eur):</label>
                    <input className="information" type="number" value={total} />
                </div>
            </li>
            <div className="btn-holder">
                <button className="btn btn1">View</button>
                <button className="btn btn2">Edit</button>
                <button className="btn btn3">Delete</button>
            </div>
        </div>    
    )
}