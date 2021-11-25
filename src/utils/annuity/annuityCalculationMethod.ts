//######### annuity formula ##########

export function annuityCalculationMethod(
  summa: number,
  period: number,
  rate: number
) {
  let calcDetails = [];
  //Изночальная сумма * ежемесечная процентная ставка / (1 - (1 / (1 + ежемесечная процентная ставка)^период кредита))
  let ann = 0;
  //процентная ставка в месяц;
  let monthRate = rate / 12;
  let topPart = +(summa * monthRate).toFixed(2);
  let bottomPart = +(1 - 1 / Math.pow(monthRate + 1, period)).toFixed(2);
  let remainSumma = summa;
  ann = topPart / bottomPart;

  for (let i = 0; i < period; i++) {
    calcDetails.push({
      date: '11-11-2021',
      presents: +((ann * period - summa) / period).toFixed(2),
      mainDebt: +(summa / period).toFixed(2),
      dif: ann,
      remainSumma: +(remainSumma -= summa / period).toFixed(2),
    });
  }
  console.log(calcDetails);
  return [...calcDetails];
}
