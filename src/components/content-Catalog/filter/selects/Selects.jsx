import s from "./Selects.module.scss";
import SelectSection from "./../../filter/select-section/SelectSection";


function Selects(props) {
    return (
        <div className={s.selects}>
            <SelectSection label="Мощьность,л.с"/>  
            <SelectSection label="Мощьность двигателя,л.с"/>  
            <SelectSection label="Макс.скорость"/>  
        </div>
);
}

export default Selects;