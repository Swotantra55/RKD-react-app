import React from 'react'
import Card from "./Card"
import Data from './data.js'


const Product = () => {
    const dataArray = Data.map(card => {
        return (<div>
            <Card 
            {...card}
        />
        <hr/></div>)
    })
    return (
        <div className="">
            {dataArray}
        </div>
    )
//   return (
//     <div>
//         <h1 >This is Products Page</h1>

//     </div>
//   )
}
export default Product
