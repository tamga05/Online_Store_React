import SearchForm from "./search-form/SearchForm";
import s from "./SearchShop.module.scss";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '2px',
    width: 14,
    height: 14,
    boxShadow: 'none',
    border: '1px solid #C4C4C4',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

// стили чекбокса 
const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#fff',
    border: '2px solid #1C62CD',
    '&:before': {
        display: 'block',
        width: 6,
        height: 6,
        position: 'relative',
        backgroundColor: '#1C62CD',
        borderRadius: 1,
        top: 2,
        left: 2,
        content: '""',
    },
    'input:hover ~ &': {
        // backgroundColor: '#106ba3',
    },
});

// Inspired by blueprintjs
function BpRadio(props) {
    return (
        <Radio
            sx={{
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}


function SearchShop() {
    return (
        <div className={s.searchShop}>
            <div className={s.searchShopInnerForm}>
                <span>Магазин</span>
                <SearchForm/>
            </div>
            <FormControl className={s.fieldset} component="fieldset">
                <RadioGroup defaultValue="week" aria-label="Когда забрать" name="customized-radios">
                    <div className={s.radioWrapper}>
                        <FormControlLabel value="today" control={<BpRadio />} label="Забрать сегодня" />
                        <FormControlLabel value="week" control={<BpRadio />} label="Забрать в течение недели" />
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default SearchShop;