import { CalculationDetailsType } from '../calculat/Calculate';
import { TextLow } from '../common/textLow/TextLow';
import style from './DetailsCalculation.module.css';

type DetailsCalculationPropsType = {
  data: CalculationDetailsType[];
  active: boolean;
};

export const DetailsCalculation = (props: DetailsCalculationPropsType) => {
  const { data, active } = props;

  const elementsTable = data.map((el, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{el.date}</td>
      <td>
        <TextLow num={el.presents} />
      </td>
      <td>
        <TextLow num={el.mainDebt} />
      </td>
      <td>
        <TextLow num={el.dif} />
      </td>
      <td>
        <TextLow num={el.remainSumma} />
      </td>
    </tr>
  ));

  return (
    <>
      {active && (
        <div className={style.detailCalculation}>
          <div className={style.subtitle}>Детали расчета</div>
          <table className={style.table}>
            <tbody>
              <tr className={style.table__header}>
                <th>порядковый номер платежа</th>
                <th>дата платежа</th>
                <th>платёж по процентам</th>
                <th>платёж по основному долгу</th>
                <th>
                  общая сумма платежа (равная сумме двух платежей: по процентам
                  и по основному долгу)
                </th>
                <th>остаток по телу кредита после данного платежа</th>
              </tr>
              {elementsTable}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
