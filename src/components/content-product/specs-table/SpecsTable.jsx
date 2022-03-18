import s from "./SpecsTable.module.scss";

function SpecsTable(props) {
    return (
        <div>
        <table className={s.specsTable}>
            <tbody>
            <tr className={s.rowTableSpecs}>
                <td>Производитель</td>
                <td>{props.productData.made}</td>
            </tr>
            <tr className={s.rowTableSpecs}>
                <td>Количество мест, шт:</td>
                <td>{props.productData.seats}</td>
            </tr>
            <tr className={s.rowTableSpecs}>
                <td>Мощность, л.с.</td>
                <td>{props.productData.power}</td>
            </tr>
            <tr className={s.rowTableSpecs}>
                <td>Тип двигателя</td>
                <td>{props.productData.enginesType}</td>
            </tr>
            <tr className={s.rowTableSpecs}>
                <td>Год выпуска</td>
                <td>{props.productData.year}</td>
            </tr>
            </tbody>
        </table>

        <details>
                <summary>Показать еще</summary>
                <table className={s.specsTableMore}>
                    <tbody>
                        <tr className={s.rowTableSpecs}>
                            <td>Еще характеристика 1</td>
                            <td>{props.productData.characteristic1}</td>
                        </tr>
                        <tr className={s.rowTableSpecs}>
                            <td>Еще характеристика 2</td>
                            <td>{props.productData.characteristic2}</td>
                        </tr>
                        <tr className={s.rowTableSpecs}>
                            <td>Еще характеристика 3</td>
                            <td>{props.productData.characteristic3}</td>
                        </tr>
                        <tr className={s.rowTableSpecs}>
                            <td>Еще характеристика 4</td>
                            <td>{props.productData.characteristic4}</td>
                        </tr>
                        <tr className={s.rowTableSpecs}>
                            <td>Еще характеристика 5</td>
                            <td>{props.productData.characteristic5}</td>
                        </tr>
                    </tbody>
                </table>
            </details>
        </div>
    );
}

export default SpecsTable;