import React from 'react';
import Button from "../components/button/Button";
import s from "./ProductCard.module.scss";

import ChartIcon from './../../../assets/images/content-product/product-card/chart.svg';

import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import CheckboxFavorite from './../components/checkbox-favorite/CheckboxFavorite';
import CardTabs from './card-tabs/CardTabs';


// STYLED RATING 
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#1C62CD',
    },
    '& .MuiRating-iconEmpty': {
        color: '#C4C4C4',
    },
});



function ProductCard(props) {
    return (
        <div className={s.productCard}>
            <div className={s.imageBox}>
                {props.productData.oldPrice ? <div className={s.sale}>Sale</div> : ''}
                <img className={s.image} src={props.productData.image} alt="Гидроцикл" /> 
                <del class={s.oldPrice}>{props.productData.oldPrice}</del>
                <p class={s.price}>{props.productData.price}</p>
                <a class={s.link} href="#">Нашли дешевле? Снизим цену!</a>
            </div>

            <div className={s.body}>
                <h1 className={s.title}>{props.productData.title}</h1>
                <p className={s.code}>Код товара: {props.productData.code}</p>
                <div className={s.rating}>
                    <div>
                        <CheckboxFavorite/>
                    </div>
                    <div>
                        <button className={s.buttonChart}>
                            <img src={ChartIcon} alt="График цен" /> 
                        </button>
                    </div>
                    <div>
                        <StyledRating 
                            name="read-only" 
                            defaultValue={4} 
                            readOnly
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    </div>
                </div>
                <div className={s.specs}>
                    <CardTabs productData={props.productData}/>
                </div>
            </div>
            
            <div className={s.cardButton}>
                <Button title="Купить"/>
            </div>

        </div>
    );
}

export default ProductCard;