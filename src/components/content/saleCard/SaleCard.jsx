import Price from '../price/Price';
import SpanSale from '../span-sale/SpanSale';
import s from './SaleCard.module.scss';



function SaleCard(props) {
    return (
        <div className={s.saleCard}>
            <div className={s.head}>
                <SpanSale label="Акция"/>
                <Price price="190 000" delPrice="225 000"/>
            </div>
            <div className={s.content}>
                <img className={s.img} src={props.img} alt={props.alt} />
                <h5 className={s.title}>{props.title}</h5>
            </div>
            <div className={s.timeSale}>
                <p className={s.text}>Акция действует до</p>
                <span className={s.time}>{props.date}</span>
            </div>
        </div>
    );
}

export default SaleCard;