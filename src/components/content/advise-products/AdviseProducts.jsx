import {NavLink} from "react-router-dom";
import s from './AdviseProducts.module.scss';
import React from 'react';








function AdviseProducts(props) {
    return (
            <div className={s.adviseProducts}>
                <span className={s.label}>SALE</span>
                <div className={s.imageWrapper}>
                <img className={s.image} src={props.image} alt="" />
                </div>
                <div className={s.infoWrapper}>
                <h2 className={s.title}>{props.title}</h2>
                <div className={s.wrapper}>
                    <span className={s.price}>{props.price} </span>
                    {props.inStock ? <button className={s.basketBtn} style={{width: '60px', height: '40px'}}>
                        <img src="" alt="" className={s.basketIcon} />
                    </button>
                    : <div/>}
                    {/* <button className={s.basketBtn}>
                    <img src="" alt="" className={s.basketIcon} />
                    </button> */}
                </div>
                <NavLink className={s.link} to={"/"}>Сообщить о поступлении</NavLink>
                </div>
            </div>
    );
}

export default AdviseProducts;