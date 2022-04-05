import { useEffect } from "react"
import InfoLine from "./InfoLine"
import ProductButtons from "./ProductButtons"

export default function ProductEditable({nr,list, del}){
    // const [name, setName] = useState(list.name)
    // const [supplier, setSupplier] = useState(list.supplier)
    // const [wei, setSvoris] = useState(list.wei)
    // const [country, setCountry] = useState(list.country)
    // const [quantity, setQuantity] = useState(list.quantity)
    // const [price, setPrice] = useState(list.price)
    // const [total, setTotal] = useState(Math.round(list.price*list.quantity*100)/100)

    useEffect(() => {
        console.log(list);
    },[]);

    
    return(
        <div className="horizontal-holder">
            <h3 className="product-nr">{`${nr}.`}</h3>
            <li className="product">
                <InfoLine label="Name:" type="text" value={list.name} ></InfoLine>
                <InfoLine label="Supplier:" type="text" value={list.supplier} ></InfoLine>
                <InfoLine label="Country:" type="text" value={list.country} ></InfoLine>
                <InfoLine label="Weight(grams):" type="number" value={list.wei} ></InfoLine>
                <InfoLine label="Quantity:" type="number" value={list.quantity} ></InfoLine>
                <InfoLine label="Price (eur):" type="number" value={list.price} ></InfoLine>
                <InfoLine label="Total (eur):" type="number" value={Math.round(list.price*list.quantity*100)/100} class="information"></InfoLine>
            </li>
            <ProductButtons del={del} id={list.id}></ProductButtons>
        </div>    
    )
}