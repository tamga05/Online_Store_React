import React from "react";
import s from "./Mailing.module.scss";
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';



const TextFieldCost = styled(TextField)({
    '&.MuiFormControl-root':{
        height:'33px',
        borderRadius: 0,
        fontSize:' 14px',
        lineHeight: '17px',
        color: '#C4C4C4',
        fontFamily: [
            'SFProDisplayRegular',
            'sans-serif',
          ].join(','),
          '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
    },
    // '&.MuiFormLabel-root.MuiInputLabel-root':{
    //     fontFamily: 'SFProDisplayRegular',
    //     fontSize:' 14px',
    //     lineHeight: '17px',
    //     color: '#C4C4C4'
    // },
  });
  const BootstrapInput = styled(InputBase)(({ theme }) => ({

    '& .MuiInputBase-input': {
      color: '#C4C4C4',
      borderRadius: 0,
      position: 'relative',
      background: '#FFFFFF',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: 'none',
      fontSize: 14,
      width: 'auto',
      padding: '8px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'SFProDisplayRegular',
            'sans-serif',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

function Mailing(props) {

   return (
        <div className={s.mailing}>
            <h3 className={s.header}>Подпишитесь на нашу рассылку и узнавайте о акциях быстрее</h3>
            <div className={s.form}>
            <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input"></InputLabel>
            <BootstrapInput defaultValue="Введите ваш e-mail:" id="bootstrap-input" />
            </FormControl>
                {/* <TextFieldCost className={s.input} id="outlined-basic" size="small" label="Введите ваш e-mail:"></TextFieldCost> */}
                <Button variant="contained" style={{borderRadius:"0px",height:"33px"}}>Отправить</Button>
            </div>
            {/* <Form placeholder='Введите ваш e-mail:' text='Отправить'/> */}
        </div>
   );
}

export default Mailing;