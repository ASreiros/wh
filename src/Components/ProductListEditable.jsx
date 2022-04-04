import { useState, useEffect } from "react"
import ProductEditable from "./ProductEditable"
import { v4 as uuidv4 } from 'uuid';
import InfoLineNew from "./InfoLineNew"

export default function ProductListEditable(){
    const [products, setProducts] = useState([])

    const [newname, setName] = useState("")
    const [newsupplier, setSupplier] = useState("")
    const [newwei, setWei] = useState("")
    const [newcountry, setCountry] = useState("")
    const [newquantity, setQuantity] = useState(0)
    const [newprice, setPrice] = useState(0)

    useEffect(() => {
        let temp = JSON.parse(localStorage.getItem("whProductList20220402"))   
        if(temp === null){
            temp = []
             localStorage.setItem("whProductList20220402", JSON.stringify(temp))
        } 
        setProducts(temp)
    },[]);


    const goCreate = ()=>{
        document.querySelector(".product-new").classList.remove("noshow")
        document.querySelector("#btn1").classList.remove("noshow")
        clearInput()
    }

    const goCancel = ()=>{
        document.querySelector(".product-new").classList.add("noshow")
        document.querySelector("#btn1").classList.add("noshow")
        document.querySelector("#error1").classList.add("noshow")
        clearInput()
    }


    const clearInput = () =>{
        setName("")
        setCountry("")
        setSupplier("")
        setWei("")
        setQuantity(0)
        setPrice(0)
    }  

    const goSave = ()=>{
        if((newname.length>0)&&(newquantity>0)&&(newprice>0)){
            document.querySelector(".product-new").classList.add("noshow")
            document.querySelector("#btn1").classList.add("noshow")
            document.querySelector("#error1").classList.add("noshow")
            let temp = JSON.parse(localStorage.getItem("whProductList20220402"))
            temp.unshift({
                    id:`id${uuidv4()}`,
                    name: newname,
                    supplier:newsupplier,
                    country:newcountry,
                    quantity:newquantity,
                    price:newprice,
                    wei:newwei
            })
            localStorage.setItem("whProductList20220402", JSON.stringify(temp))
            setProducts(temp)
        } else{
            document.querySelector("#error1").classList.remove("noshow")
        } 
    }

    const ChangeName = v =>{
        setName(v.target.value)
    }

    const ChangeCountry = v =>{
        setCountry(v.target.value)
    }

    const ChangeSupplier = v =>{
        setSupplier(v.target.value)
    }

    const ChangeWei = v =>{
        if(v.target.value >= 0){
            setWei(v.target.value)
        }
    }

    const ChangeQuantity = v =>{
        if(v.target.value >= 0){
            setQuantity(v.target.value)
        }
    }

    const ChangePrice = v =>{
        if(v.target.value >= 0){
            setPrice(v.target.value)
        }
    }

    return(
        <>
            <div className="btn-holder">
                <button onClick={goCreate} className="btn btn0">Create</button>
                <button className="btn btn4">List</button>
            </div>    
            <div className="horizontal-holder product-new noshow">
                <li className="product">
                    <InfoLineNew change={ChangeName} label="Name:" type="text" value={newname} ></InfoLineNew>
                    <InfoLineNew change={ChangeSupplier} label="Supplier:" type="text" value={newsupplier} ></InfoLineNew>
                    <InfoLineNew change={ChangeCountry} label="Country:" type="text" value={newcountry} ></InfoLineNew>
                    <InfoLineNew change={ChangeWei} label="Weight(grams):" type="number" value={newwei} ></InfoLineNew>
                    <InfoLineNew change={ChangeQuantity} label="Quantity:" type="number" value={newquantity} ></InfoLineNew>
                    <InfoLineNew change={ChangePrice} label="Price (eur):" type="number" value={newprice} ></InfoLineNew>
                </li>
                <div id="btn1" className="btn-holder noshow">
                    <button onClick={goSave} className="btn btn1">Save</button>
                    <button onClick={goCancel} className="btn btn3">Cancel</button>
                </div>
            </div>
            <p id="error1" className="noshow">Please provide name of the product, quantity more then 0 and price more then 0</p>
            <ol>
                {
                    products.map((pr,i)=>{ 
                        return(
                            <ProductEditable key={uuidv4()} nr={i+1} list={pr}></ProductEditable>
                        )
                    })
                }
            </ol>
        </>
    )
}