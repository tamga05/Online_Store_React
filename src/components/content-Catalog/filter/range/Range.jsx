import * as React from 'react';
import s from './Range.module.scss';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';

const InputCost = styled(Input)(({ theme }) => ({
  '&.MuiInputBase-root':{
          fontFamily:' Barlow',
          fontSize: '14px',
          lineHeight: '17px',
          color: '#2F3035'
      },
}));


function valuetext(value) {
  return `${value}`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };



  return (
    <Box sx={{ width: 290 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <div className={s.conclusion}>
        <div className={s.minInput}>
            <span className={s.minSpan}>от</span>
            <InputCost placeholder='100 000' style={{width:'55px'}}></InputCost>
        </div>
        <div className={s.maxInput}>
          <span className={s.maxSpan}>до</span>
          <InputCost placeholder='500 000' style={{width:'55px'}}></InputCost>
        </div>
      </div>
  </Box>
    

  );
}