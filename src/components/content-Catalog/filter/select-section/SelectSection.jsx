import s from "./SelectSection.module.scss";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
function arrows (){
  const arrow=document.getElementsByClassName('.MuiSelect-icon');
  arrow.setAttribute('data-testid','ArrowForwardIosSharpIcon');
}

function SelectSection(props) {
    
    
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
    };
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        
        '& .MuiInputBase-input': {
          borderRadius: 0,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: 'none',
          fontSize: 14,
          padding: '8px 46px 8px 20px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            'SFProDisplayRegular'
          ].join(','),
          '&:focus': {
            borderRadius: 0,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
        '&.MuiSvgIcon-root.MuiSelect-icon':{
          dataTestid:'ArrowForwardIosSharpIcon ',
        }
      }));

    return (
        <div className={s.selectSection}>
            <div className={s.subTitle}>
                <h4 className={s.text}>{props.label}</h4>
            </div>
            <div className={s.select}>
                <FormControl sx={{ m: 1, minWidth: 50 }}>
                <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
                <Select labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={age} 
                        onChange={handleChange} 
                        label={props.label} 
                        input={<BootstrapInput />}
                        expandIcon={<ArrowForwardIosSharpIcon />}
                        // data-testid={ArrowForwardIosSharpIcon}
                        >
                    <MenuItem value="" ><em>None</em></MenuItem>
                    <MenuItem value={90}>90</MenuItem>
                    <MenuItem value={130}>130</MenuItem>
                    <MenuItem value={154}>154</MenuItem>
                    <MenuItem value={230}>230</MenuItem>
                    <MenuItem value={300}>300</MenuItem>
                </Select>
            </FormControl>
            </div>
            
        </div>
);
}

export default SelectSection;