import s from "./Products.module.scss";
import React from "react";
import ProductSection from "./../product-section/ProductSection";


function Products(props) {


    return (
        <div className={s.products}>
                <ProductSection title={props.data.title} img={props.data.img} link={props.data.link}/>
                <ProductSection title={props.data2.title} img={props.data2.img} link={props.data2.link}/>
                <ProductSection title={props.data3.title} img={props.data3.img} link={props.data3.link}/>
                <ProductSection title={props.data4.title} img={props.data4.img} link={props.data4.link}/>
                <ProductSection title={props.data5.title} img={props.data5.img} link={props.data5.link}/>
                <ProductSection title={props.data6.title} img={props.data6.img} link={props.data6.link}/>
        </div>
);
}

export default Products;