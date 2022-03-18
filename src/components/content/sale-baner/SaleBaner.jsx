import s from "./SaleBaner.module.scss";
import imgMoto from "./../../../assets/images/moto.png";
import imgAll from "./../../../assets/images/all-moto.png";
// import Button from '@mui/material/Button';

function SaleBaner(props) {
    return (
        <div className={s.sale}>
            <div className={s.saleMoto}>
                <img className={s.imgMoto} src={props.data.img} alt="" />
            </div>
            <div className={s.saleAll}>
                <img className={s.imgAll} src={props.data5.img} alt="" />
            </div>
            <div className={s.saleText}>
                <p className={s.text}>CКИДКИ <br className={s.br}/>на все запчасти<br/> до 70%</p>
            </div>
            <div className={s.saleButton}>
                <button className={s.button}>ПОСМОТРЕТЬ ВСЕ</button>
            </div>
        </div>
);
}

export default SaleBaner;