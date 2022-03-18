import Button from "../../../../components/button/Button";
import s from "./RowTable.module.scss";

function RowTable(props) {
    return (
        <tbody className={s.tbody}>
            <tr>
                <th>Адрес</th>
                <td>{props.address}</td>
            </tr>
            <tr>
                <th colspan="2">Режим работы</th>
            </tr>
            <tr>
                <td>пн-сб:</td>
                <td>{props.weekday}</td>
            </tr>
            <tr>
                <td>вс:</td>
                <td>{props.weekends}</td>
            </tr>
            <tr>
                <th>Доступно</th>
                <td>
                    {props.number ? 'В наличии' : 'Нет в наличии'}
                </td>
            </tr>
            <tr>
                <th>Количество</th>
                <td>{props.number}</td>
            </tr>
            <tr>
                <td colspan="2"><Button title="Купить" /></td>
            </tr>
        </tbody>
    );
}
export default RowTable;