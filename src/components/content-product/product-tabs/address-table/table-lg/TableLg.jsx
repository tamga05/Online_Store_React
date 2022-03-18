import s from "./TableLg.module.scss";
import RowTable from "./row-table/RowTable";


function TableLg(props) {
    return (
        <table className={s.addressTable}>
            <thead>
                <tr class={s.rowTable__header}>
                    <th>Адрес</th>
                    <th>Режим работы</th>
                    <th>Доступно</th>
                    <th>Количество</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class={s.rowTable__body}>
                <RowTable address={
                    props.AddressData[0][0]}
                    weekday={props.AddressData[0][1]}
                    weekends={props.AddressData[0][2]}
                    number={props.AddressData[0][3]} />
                <RowTable address={
                    props.AddressData[1][0]}
                    weekday={props.AddressData[1][1]}
                    weekends={props.AddressData[1][2]}
                    number={props.AddressData[1][3]} />
                <RowTable address={
                    props.AddressData[2][0]}
                    weekday={props.AddressData[2][1]}
                    weekends={props.AddressData[2][2]}
                    number={props.AddressData[2][3]} />
                <RowTable address={
                    props.AddressData[3][0]}
                    weekday={props.AddressData[3][1]}
                    weekends={props.AddressData[3][2]}
                    number={props.AddressData[3][3]} />
            </tbody>
        </table>
    )
}
export default TableLg;