import s from "./AddressTable.module.scss";
import TableLg from "./table-lg/TableLg";
import TableMd from "./table-md/TableMd";


const AddressData = [
    ["Москва, ул. Науки 25", "08:00-19:00", "09:00-17:00", 1],
    ["Москва, ул.  Южная 134","08:00-19:00", "09:00-17:00", 1],
    ["Санкт-Петербург, ул. Красная 19","08:00-19:00","09:00-17:00", 0],
    ["Киев, ул Шевченко 167","08:00-19:00","09:00-17:00", 0],
]

function AddressTable(props) {
    return (
        <div className={s.AddressTable__body}>
            <TableLg className={s.tableLg} AddressData={AddressData} />
            <TableMd className={s.tableMd} AddressData={AddressData} />
        </div>
    );
}
export default AddressTable;