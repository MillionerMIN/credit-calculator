//######### annuity formula ##########
//метод расчета использовал https://myfin.by/wiki/term/annuitetnyj-platyozh

import { datePeriod } from '../datePeriod/datePeriod';

export function annuityCalculationMethod(
  summa: number,
  period: number,
  rate: number
) {
  let calcDetails = [];
  //сумма ежемесячного аннуитетного платежа = коэффициент аннуитета * сумма кредита
  let ann = 0;
  //процентная ставка в месяц;
  let monthRate = rate / 12 / 100;
  let topPart = monthRate * Math.pow(1 + monthRate, period);
  let bottomPart = Math.pow(1 + monthRate, period) - 1;
  //коэффициент аннуитета
  let rateAnn = topPart / bottomPart;
  let remainSumma = summa;
  ann = +(rateAnn * summa).toFixed(2);
  const arrDate = datePeriod(new Date(), period);

  for (let i = 0; i < period; i++) {
    calcDetails.push({
      date: arrDate[i],
      presents: +((ann * period - summa) / period).toFixed(2),
      mainDebt: +(summa / period).toFixed(2),
      dif: ann,
      remainSumma: +(remainSumma -= summa / period).toFixed(2),
    });
  }
  return calcDetails;
}
