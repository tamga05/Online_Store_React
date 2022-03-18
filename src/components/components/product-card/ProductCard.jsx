import s from "./ProductCard.module.scss";
import * as React from 'react';
import CheckboxFavorite from '../../content-product/components/checkbox-favorite/CheckboxFavorite';


import cartIcon from './../../../assets/images/catalog-card/cart.svg';

function ProductCard(props) {
    return (
        <div className={s.productCard}>
            {props.sale ? 
                <span className={s.sale}>SALE</span> : 
                <span></span>
            }
            <div className={s.favorite}>
                <CheckboxFavorite/>
            </div>
            <a href="" className={s.linkImage}>
                    <img src={props.image} alt="Картинка" />
                    <div className={s.linkImageShow}>
                        <span>посмотреть товар</span>
                    </div>
                </a>
                <a className={s.titleLink} href="">
                    <h2 className={s.title}>
                        {props.title}
                    </h2>
                </a>
                <div className={s.productCardBody}>
                    {props.price ?
                        <div>
                            <div className={s.price}>{props.price}</div>
                            <button className={s.cart}>
                                <img src={cartIcon} alt="Корзина" />
                            </button>
                        </div> :
                        <div className={s.noPrice}>
                            <p className={s.noPriceText}>нет в наличии</p>
                            <a href="" className={s.message}>Сообщить о поступлении</a>
                        </div>
                    }
                </div>
        </div>
    );
}
export default ProductCard;

