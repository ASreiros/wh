import { useState, useEffect } from "react"
import ProductEditable from "./ProductEditable"

export default function ProductListEditable(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        let temp = JSON.parse(localStorage.getItem("whProductList20220402"))   
        if(temp === null){
            temp = [{
                name:"Pienas",
                supplier:"Rokiškio pienas",
                country:"LT",
                quantity:12,
                price:1.20,
                wei:1000
                }
                ,{
                    name:"Bananai",
                    supplier:"Maroko foods",
                    country:"Maroko",
                    quantity:500,
                    price:0.15,
                    wei:35
                }];      // make it [] after testing
             localStorage.setItem("whProductList20220402", JSON.stringify(temp))
        } 
        setProducts(temp)
    },[]);



    return(
        <>
            <ol>
                {
                    products.map((pr,i)=>{ 
                        return(
                            <ProductEditable nr={i+1} list={pr}></ProductEditable>
                        )
                    })
                }
            </ol>
        </>
    )
}