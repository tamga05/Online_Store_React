import s from './Tabs.module.scss';

function Tabs(props) {
    return (
        <div className={s.tabsBlock}>
            <button className={s.tabsButton} type="button">{props.text1}</button>
            <button className={s.tabsButton} type="button">{props.text2}</button>
            <button className={s.tabsButton} type="button">{props.text3}</button>
        </div>
    );
}

export default Tabs;
