import React from 'react'
import Footer from './Footer';
import Top from './Top';
import Product from './Product';

function Hello(){
    return(
        <div>
            <Top/>
            <h1>This is my App</h1>
            <Product name="Huawei" price="120k"/>
            <Product name="Samsung" price="100k"/>
            <Product name="Redmi" price="80k"/>
            <Footer/>
        </div>
    )
}

export default Hello;
