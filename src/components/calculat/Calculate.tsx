import { useState } from 'react';
import { annuityCalculationMethod } from '../../utils/annuity/annuityCalculationMethod';
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
  date: string;
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
  const [rate, setRate] = useState<string>('22.9');
  const [period, setPeriod] = useState<number>(6);
  const [detail, setDetail] = useState<boolean>(false);
  const [method, setMethod] = useState<boolean>(false);

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
  let dataDetails;
  let dif, maxDif, minDif;

  // Изменение даты в зависимости от срока кредитования
  // var now = new Date();
  // const correctDate =
  //   now.getDate() + '-' + now.getMonth() + '-' + now.getFullYear();

  // let month = now.getMonth() + 1;

  // let year = now.getFullYear();

  // if (month === 12) {
  //   month = 0 + 1;
  //   year++;
  // }

  // for (let i = 0; i <= 12; i++) {
  //   console.log(month++ + ' ' + year);

  //   if (month === 12) {
  //     month = 0;
  //     year++;
  //   }
  // }

  // Проверка Условие выбора метода расчета
  if (method) {
    dataDetails = annuityCalculationMethod(+summa, period, +rate / 100);
    dif = +dataDetails[0].dif.toFixed(2);
    console.log(dataDetails);
  } else {
    dataDetails = differentiatedCalculationMethod(+summa, period, +rate / 100);
    console.log(dataDetails);
    //Максимальный ежемесечный платеж
    //@ts-ignore
    maxDif = dataDetails[0].dif;
    //Минимальный ежемесечный платеж
    //@ts-ignore
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
