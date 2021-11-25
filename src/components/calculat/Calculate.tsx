import { useState } from 'react';
import { annuityCalculationMethod } from '../../utils/annuity/annuityCalculationMethod';
import { daysInMonth } from '../../utils/datePeriod/datePeriod';
import { differentiatedCalculationMethod } from '../../utils/differentiated/differentiatedCalculationMethod';
import { DetailsCalculation } from '../detailsCalculation/DetailsCalculation';
import { FormParameters } from '../formParameters/FormParameters';
import { FormResults } from '../formResults/FormResults';

export type CalculationResultsType = {
  //Сумма кредита
  summa: number;
  //Ежемесечный платеж:
  dif?: number;
  //Максимальный ежемесечный платеж
  maxDif?: number;
  //Минимальный ежемесечный платеж
  minDif?: number;
  //общая сумма выплат по кредиту
  totalAmount: number;
  // общая сумма переплаты по кредиту
  totalOverpayment: number;
};

export type CalculationDetailsType = {
  //дата платежа:
  date: string | number;
  //Сумма процентов в текущем месяце
  presents: number;
  //платёж по основному долгу:
  mainDebt: number;
  //общая сумма платежа:
  dif: number;
  //остаток по телу кредита после данного платежа:
  remainSumma: number;
};

export const Calculate = () => {
  const [summa, setSumma] = useState<string>('10000');
  const [rate, setRate] = useState<string>('23');
  const [period, setPeriod] = useState<number>(48);
  const [detail, setDetail] = useState<boolean>(false);
  const [method, setMethod] = useState<boolean>(true);

  //функция изменения суммы кредита
  const changeSumma = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    setSumma(value);
  };

  //функция изменения процентной ставки
  const changeRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    setRate(value);
  };

  //функция изменения периода кредитования
  const changePeriod = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.dataset.period &&
      setPeriod(+e.currentTarget.dataset.period);
  };

  //функция отоброжения блока с деталями расчёта
  const onOpenDetails = () => {
    setDetail(!detail);
  };
  //функция переключения метода расчета
  const onChangeMethodCalculation = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.dataset.method && setMethod(!method);
  };
  //
  //Стартовые данные
  let dataDetails: CalculationDetailsType[];
  let dif, maxDif, minDif;

  // Проверка Условие выбора метода расчета
  if (method) {
    dataDetails = annuityCalculationMethod(+summa, period, +rate);
    dif = +dataDetails[0].dif.toFixed(2);
    console.log(dataDetails);
  } else {
    dataDetails = differentiatedCalculationMethod(+summa, period, +rate);
    console.log(dataDetails);

    //Максимальный ежемесечный платеж
    maxDif = dataDetails[0].dif;

    //Минимальный ежемесечный платеж
    minDif = dataDetails[dataDetails.length - 1].dif;
  }

  // общая сумма выплат по кредиту
  const totalAmount = +dataDetails
    .reduce((sum: number, item: any) => {
      return sum + item.dif;
    }, 0)
    .toFixed(2);
  // общая сумма переплаты по кредиту
  const totalOverpayment = +(totalAmount - +summa).toFixed(2);

  const calcResults: CalculationResultsType = {
    summa: +summa,
    dif,
    maxDif,
    minDif,
    totalAmount,
    totalOverpayment,
  };

  let now = new Date();

  const arr = daysInMonth(now);

  console.log('date' + arr);

  return (
    <>
      <FormParameters
        summa={summa}
        rate={rate}
        period={period}
        method={method}
        onChangeSumma={changeSumma}
        onChangeRate={changeRate}
        onChangePeriod={changePeriod}
        onChangeMethodCalculation={onChangeMethodCalculation}
      />
      <FormResults
        data={calcResults}
        active={detail}
        onOpenDetails={onOpenDetails}
      />

      <DetailsCalculation
        active={detail}
        //@ts-ignore
        data={dataDetails}
      />
    </>
  );
};
