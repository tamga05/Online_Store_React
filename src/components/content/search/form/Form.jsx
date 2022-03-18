import s from './Form.module.scss';

function Form(props) {
    return (
        <form className={s.form}>
            <input className={s.formInput} type="text" placeholder={props.placeholder}/>
            <button className={s.formButton} type="reset">{props.text}</button>
        </form>
    );
}

export default Form;