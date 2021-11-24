import style from './DetailsCalculation.module.css';

export const DetailsCalculation = () => {
  return (
    <div className={style.detailCalculation}>
      <div className={style.subtitle}>Детали расчета</div>
      <table className={style.table}>
        <tr className={style.table__header}>
          <th>порядковый номер платежа</th>
          <th>дата платежа</th>
          <th>платёж по процентам</th>
          <th>платёж по основному долгу</th>
          <th>
            общая сумма платежа (равная сумме двух платежей: по процентам и по
            основному долгу)
          </th>
          <th>остаток по телу кредита после данного платежа</th>
        </tr>
        <tr>
          <td>1</td>
          <td>13-12-2020</td>
          <td>110 000</td>
          <td>11111111</td>
          <td>1000021</td>
          <td>1232321</td>
        </tr>
      </table>
    </div>
  );
};
