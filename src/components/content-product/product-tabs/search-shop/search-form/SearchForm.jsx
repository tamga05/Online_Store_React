import s from "./SearchForm.module.scss";
import searchIcon from './../../../../../assets/images/content-product/search/Search.svg';


function SearchForm() {
    return (
        <form className={s.searchForm}>
            <input className={s.searchFormInput} placeholder="Введите название магазина" type="text" maxlength="30"/>
            <button className={s.searchFormButton} type="submit">
                <img className={s.searchFormIcon} src={searchIcon} alt="Search" />
            </button>
        </form>
    );
}

export default SearchForm;