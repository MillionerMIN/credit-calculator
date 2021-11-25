// ########## Дифференцированный метод ##########

import { CalculationDetailsType } from '../../components/calculat/Calculate';
import { datePeriod } from '../datePeriod/datePeriod';

export function differentiatedCalculationMethod(
  summa: number,
  period: number,
  rate: number
) {
  let calcDetails = [];

  let monthRate = rate / 12 / 100;
  let dif = 0;
  let presents = 0;
  //Оставшееся сумма платежа
  let remainSumma = summa;
  //Основной долг «тело кредита», то есть ежемесячный платеж в счет погашения основного долга
  let mainDebt = +(summa / period).toFixed(2);
  //Расчет каждого платежа

  //массив дат для отоброжения дат периода
  const arrDate = datePeriod(new Date(), period);
  for (let i = 0; i < period; i++) {
    let calcDetail = {} as CalculationDetailsType;
    calcDetail = {
      ...calcDetail,
      date: arrDate[i],
    };
    calcDetail = { ...calcDetail, remainSumma };

    presents = +(remainSumma * monthRate).toFixed(2); //ежемесячная сумма подлежащих к уплате процентов
    calcDetail = { ...calcDetail, presents };
    remainSumma -= mainDebt;
    remainSumma = +remainSumma.toFixed(2);
    dif = +(presents + mainDebt).toFixed(2); //сумма ежемесячного дифференцированного платежа
    calcDetail = { ...calcDetail, mainDebt, dif };
    calcDetails.push(calcDetail);
  }
  return [...calcDetails];
}
