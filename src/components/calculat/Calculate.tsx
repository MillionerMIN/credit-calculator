import { useState } from 'react';
import { DetailsCalculation } from '../detailsCalculation/DetailsCalculation';
import { FormParameters } from '../formParameters/FormParameters';
import { FormResults } from '../formResults/FormResults';

export const Calculate = () => {
  const [detail, setDetail] = useState<boolean>(false);
  //функция отоброжения блока с деталями расчёта
  const onOpenDetails = () => {
    setDetail(!detail);
  };

  let summa = 10000;
  let period = 12;
  let rate = 0.229;

  //annuity formula
  //Изночальная сумма * ежемесечная процентная ставка / (1 - (1 / (1 + ежемесечная процентная ставка)^период кредита))
  let ann = 0;
  //процентная ставка в месяц;
  let monthRate = rate / 12;
  let topPart = +(summa * monthRate).toFixed(2);
  let bottomPart = +(1 - 1 / Math.pow(monthRate + 1, period)).toFixed(2);
  ann = topPart / bottomPart;
  console.log(`###annuity: ${ann}`);

  return (
    <>
      <FormParameters />
      <FormResults onOpenDetails={onOpenDetails} />
      <DetailsCalculation active={detail} />
    </>
  );
};
