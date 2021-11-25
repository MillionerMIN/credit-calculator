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
  const [detail, setDetail] = useState<boolean>(false);
  const [method, setMethod] = useState<boolean>(false);
  //функция отоброжения блока с деталями расчёта
  const onOpenDetails = () => {
    setDetail(!detail);
  };
  //функция переключения метода расчета
  const onChangeMethodCalculation = () => {
    setMethod(!method);
  };
  //Стартовые данные
  let dataDetails;
  let summa = 10000;
  let period = 12;
  let rate = 0.229;
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
    dataDetails = annuityCalculationMethod(summa, period, rate);
    dif = dataDetails[0].dif;
    console.log(dataDetails);
  } else {
    dataDetails = differentiatedCalculationMethod(summa, period, rate);
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
  const totalOverpayment = +(totalAmount - summa).toFixed(2);

  const calcResults: CalculationResultsType = {
    summa,
    dif,
    maxDif,
    minDif,
    totalAmount,
    totalOverpayment,
  };

  return (
    <>
      <FormParameters onChangeMethodCalculation={onChangeMethodCalculation} />
      <FormResults onOpenDetails={onOpenDetails} data={calcResults} />

      <DetailsCalculation
        active={detail}
        //@ts-ignore
        data={dataDetails}
      />
    </>
  );
};
