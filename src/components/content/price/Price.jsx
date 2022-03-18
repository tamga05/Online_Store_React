import s from './Price.module.scss';

function Price(props) {
    return (
        <div className={s.price}>
            <ins className={s.ins}>{props.price} ₽</ins>
            <del className={s.del}>{props.delPrice} ₽</del>   
        </div>   
    );
}

export default Price;