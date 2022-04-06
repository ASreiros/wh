import { useState, useEffect } from "react"
import InfoLineNew from "./InfoLineNew"
export default function Edit({cancel, data, replace}) {
    const [ename, editName] = useState("")
    const [esupplier, editSupplier] = useState("")
    const [ewei, editWei] = useState("")
    const [ecountry, editCountry] = useState("")
    const [equantity, editQuantity] = useState(0)
    const [eprice, editPrice] = useState(0)
    const [error, setError] = useState("")


    useEffect(() => {
        editName(data.name)
        editSupplier(data.supplier)
        editWei(data.wei)
        editCountry(data.country)
        editQuantity(data.quantity)
        editPrice(data.price)
    },[]);


    const handleInput = (e, d)=>{
        switch(d){
            case "name":
                editName(e.target.value)   
                break;
            case "supplier":
                editSupplier(e.target.value)
                break;
            case "country":
                editCountry(e.target.value);
                break;
            case "weight":
                if(e.target.value>=0){
                    editWei(e.target.value);
                } 
                break;
            case "quantity":
                if(e.target.value>=0){
                    editQuantity(e.target.value);
                }    
                break;
            case "price":
                if(e.target.value>=0){
                    editPrice(e.target.value);
                }
                break;                                                            
            default:
                break;          
        }
    }


    const handleEdit =()=>{
        if(ename.length>0){
            replace(
                {
                    id:data.id,
                    name: ename,
                    supplier:esupplier,
                    country:ecountry,
                    quantity:equantity,
                    price:eprice,
                    wei:ewei
            }
            );
        } else{
            setError("Please enter the name of the product")
        }

    }

    const handleCancel = () =>{
        cancel()
    }

    return(
        <div className="modal">
            <div className="product-edit">
                <h2>Edit product</h2>
                <div>
                    <InfoLineNew change={(e) => handleInput(e, "name")} label="Name:" type="text" value={ename} ></InfoLineNew>
                    <InfoLineNew change={(e) => handleInput(e, "supplier")} label="Supplier:" type="text" value={esupplier} ></InfoLineNew>
                    <InfoLineNew change={(e) => handleInput(e, "country")} label="Country:" type="text" value={ecountry} ></InfoLineNew>
                    <InfoLineNew change={(e) => handleInput(e, "weight")} label="Weight(grams):" type="number" value={ewei} ></InfoLineNew>
                    <InfoLineNew change={(e) => handleInput(e, "quantity")} label="Quantity:" type="number" value={equantity} ></InfoLineNew>
                    <InfoLineNew change={(e) => handleInput(e, "price")} label="Price (eur):" type="number" value={eprice} ></InfoLineNew>
                </div>
                <p>{error}</p>
                <div className="btn-holder">
                    <button onClick={handleEdit} className="btn btn1">Edit</button>
                    <button onClick={handleCancel} className="btn btn2">Cancel</button>
                </div> 
            </div>    
        </div>
    )
    
}