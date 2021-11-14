import React from 'react'
function Product(props){
    return(
        <div>
            Name: {props.name}<br/>
            Price: {props.price}
        </div>
    )
}

export default Product;