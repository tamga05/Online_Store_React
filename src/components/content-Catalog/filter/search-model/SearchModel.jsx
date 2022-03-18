import s from "./SearchModel.module.scss";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function SearchModule(props) {
    return (
        <div className={s.searchModule}>
            <Autocomplete id="free-solo-demo" freeSolo
                options={models.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Введите модель" />}
            />    
        </div>
);
}
export default SearchModule;

const models = [
    { title: 'SeaDoo GTI 130hp SE Black\Mango'},
    { title: 'SeaDoo GTR 230hp STD Black / Gulfstream'},
    { title: 'SeaDoo GTX 300hp LTD Liquid Metal' },
    { title: 'SeaDoo Spark 60hp 2 up' },
    { title: 'SeaDoo WAKE 230hp PRO Teal blue' },
    { title: 'Spark 2-UP 900 Ho Ace Pineapple' },
    { title: 'SeaDoo Spark 60hp 2 up' }
]