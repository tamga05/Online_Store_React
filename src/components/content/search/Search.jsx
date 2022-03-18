import s from './Search.module.scss';

import Tabs from './tabs/Tabs';
import Form from './form/Form';

function Search(props) {
    return (
        <div className={s.search}>
            <Tabs text1='Поиск по  номеру' text2='Поиск по марке' text3='Поиск по названию товара'/>
            <Form placeholder='Введите марку' text='Искать'/>
        </div>
    );
}

export default Search;