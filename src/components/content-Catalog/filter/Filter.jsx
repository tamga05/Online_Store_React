import s from "./Filter.module.scss";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import SearchModule from "./search-model/SearchModel";
import Selects from "./selects/Selects";
import Range from "./range/Range";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function valuetext(value) {
    return `${value}$`;
  }
  const minDistance = 10;

function Filter(props) {
    const AccordionCost = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
      }));
      
      const AccordionSummaryCost = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        
        flexDirection: 'row-reverse',
        padding:'0',
        
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1)
        },
        '& .MuiTypography-root':{
            fontWeight: '600',
            fontSize: '16px' ,
            color: '#2F3035',
        },
        '& .css-29zqm4-MuiButtonBase-root .MuiAccordionSummary-root':{
            padding:'0',
        }
}));

        const AccordionDetailsCost = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: '9px 9px 18px 0px',
       
        '& .MuiButtonBase-root':{
            padding: '9px 12px 9px 9px',
            marginLeft: '10px',
            maxHeight:'25px',
            fontWeight:'bold',
            fontSize: '12px',
            lineHeight: '14px',
            borderRadius:0,
        },
        '& .MuiButtonBase-root:first-child':{
            marginLeft: '0px'
        },
        '& .MuiButtonBase-root:last-child':{
            background:' #2F3035'
        },
}));           
const FormGroupCost = styled(FormGroup)(({ theme }) => ({
    flexDirection:"row",
    
    '& .MuiFormControlLabel-root':{
        marginLeft:'0px',
        minWidth:'50%',
        marginRight:'0px',
        marginTop: '15px'
    },
    '& .MuiFormControlLabel-root .MuiFormControlLabel-label':{
        lineHeight: '17px',
        fontSize: '14px',
        color: '#000000'
    },
}));           

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    }

   
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
    
        const [value2, setValue2] = React.useState([20, 37]);
        // tabs constants
        const [value, setValue] = React.useState(2);
        const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
        };
        const AntTab=styled(Tab)({
            padding:'7px',
            fontSize: '16px',
            color: '#2F3035',
            '&.MuiButtonBase-root.MuiTab-root':{
                justifyContent: 'flex-end'},
            '&.MuiButtonBase-root.MuiTab-root.Mui-selected':{
                color: '#2F3035',
                justifyContent: 'flex-end'}
        });
        // constants button
        const ArtButton=styled(Button)({
            marginTop:'40px'
        })

return (
    <div className={s.filter}>
        <div className={s.tabs}>
            <Tabs value={value} onChange={handleChangeTabs} aria-label="disabled tabs example">
                <AntTab label="ПАРАМЕТРЫ" />
                <AntTab label="ПО МАРКЕ" disabled />
            </Tabs>
        </div>
        
        <div className={s.parameters}>
             {/* Аккардеон Наличие */}
        <AccordionCost>
            <AccordionSummaryCost expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Наличие</Typography>
            </AccordionSummaryCost>
            <AccordionDetailsCost>
                <FormGroupCost>
                    <FormControlLabel control={<Checkbox />} label="В наличие" />
                    <FormControlLabel control={<Checkbox />} label="Под заказ" />
                </FormGroupCost>
            </AccordionDetailsCost>
        </AccordionCost>

        {/* Аккардеон Новинки */}
        <AccordionCost>
            <AccordionSummaryCost expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Новинки</Typography>
            </AccordionSummaryCost>
            <AccordionDetailsCost>
                <FormGroupCost>
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Все" style={{minWidth:'25%'}} />
                    <FormControlLabel control={<Checkbox />} label="Новинки" style={{minWidth:'25%'}}/>
                    <FormControlLabel control={<Checkbox />} label="Акции" style={{minWidth:'25%'}}/>
                </FormGroupCost>
            </AccordionDetailsCost>
        </AccordionCost>

        {/* Цена */}
        <AccordionCost>
            <AccordionSummaryCost expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Цена</Typography>
            </AccordionSummaryCost>
            <AccordionDetailsCost>
                <FormGroupCost>
                    <Range/>
                </FormGroupCost>
            </AccordionDetailsCost>
        </AccordionCost>
        
        {/* sections Selects */}
        <Selects/>
        {/* Аккардион Бренд */}
        <AccordionCost>
            <AccordionSummaryCost expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Бренд</Typography>
            </AccordionSummaryCost>
            <AccordionDetailsCost>
                <FormGroupCost>
                    <FormControlLabel control={<Checkbox />} label="BRP" />
                    <FormControlLabel control={<Checkbox />} label="Spark 2" />
                    <FormControlLabel control={<Checkbox />} label="Spark 3" />
                </FormGroupCost>
            </AccordionDetailsCost>
            <Link href="#">Показать ещё</Link>
        </AccordionCost>
        {/* Аккардеон Модель */}
        <AccordionCost>
            <AccordionSummaryCost expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Модель</Typography>
            </AccordionSummaryCost>
            <AccordionDetailsCost>
                <SearchModule/>
                <FormGroupCost>
                    <FormControlLabel control={<Checkbox />} label="Sea-doo Spark 2" />
                    <FormControlLabel control={<Checkbox />} label="SeaDoo Spark 90 " />
                    <FormControlLabel control={<Checkbox />} label="SeaDoo GTI 155" />
                    <FormControlLabel control={<Checkbox />} label="SeaDoo GTR 230" />
                </FormGroupCost>
            </AccordionDetailsCost>
            <Link href="#">Показать ещё</Link>
        </AccordionCost>

        {/* Акции */}
        <AccordionCost>
            <AccordionSummaryCost expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Акции</Typography>
            </AccordionSummaryCost>
            <AccordionDetailsCost>
                <FormGroupCost>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained">SALE</Button>
                    <Button variant="contained" disabled>NEW</Button>
                    <Button variant="contained" disabled>HIT</Button>
                    <Button variant="contained" color="success">Дилер</Button>
                </Stack>
                </FormGroupCost>
            </AccordionDetailsCost>
        </AccordionCost>
        {/* Аккардеон Страны */}
        <AccordionCost>
            <AccordionSummaryCost expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Страны</Typography>
            </AccordionSummaryCost>
            <AccordionDetailsCost>
                <FormGroupCost>
                    <FormControlLabel control={<Checkbox />} label="Россия" />
                    <FormControlLabel control={<Checkbox />} label="Германия" />
                    <FormControlLabel control={<Checkbox />} label="Китай" />
                    <FormControlLabel control={<Checkbox />} label="США" />
                </FormGroupCost>
            </AccordionDetailsCost>
            <Link href="#">Показать ещё</Link>
        </AccordionCost>
        </div>     
        {/* нихняя кнопка */}
        <ArtButton className={s.btn} variant="contained" disabled>Выбрать</ArtButton>
        {/* Дополнительные параметры */}
        <AccordionCost>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header">
                <Typography>Дополнительные параметры</Typography>
            </AccordionSummary>
            <AccordionDetailsCost>
                <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                 malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetailsCost>
        </AccordionCost>
        {/* сбросить фильтр */}
        <Link className={s.droppingLink} disabled>Сбросить фильтр</Link>
    </div>      
    );
}

export default Filter;