import s from './Title.module.scss';



function Title(props) {
   return (
      <h2 className={s.title}>
         {props.text}
      </h2>

   );
}

export default Title;