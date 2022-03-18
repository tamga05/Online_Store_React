import s from './SpanSale.module.scss';

function SpanSale(props) {
    return (
        <div className={s.spanSale}>
            <span className={s.text}>{props.label}</span>
        </div>   
    );
}

export default SpanSale;