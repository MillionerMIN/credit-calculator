// ########## Дифференцированный метод ##########

export function differentiatedCalculationMethod(
  summa: number,
  period: number,
  rate: number
) {
  let calcDetails = [];

  let monthRate = rate / 12;
  let dif = 0;
  let presents = 0;
  //Оставшееся сумма платежа
  let remainSumma = summa;
  //Основной долг
  let mainDebt = +(summa / period).toFixed(2);
  //Расчет каждого платежа
  for (let i = 0; i < period; i++) {
    let calcDetail = {};
    calcDetail = {
      ...calcDetail,
      date: '11-11-2021',
    };
    calcDetail = { ...calcDetail, remainSumma };
    presents = +(remainSumma * monthRate).toFixed(2);
    calcDetail = { ...calcDetail, presents };
    remainSumma -= mainDebt;
    remainSumma = +remainSumma.toFixed(2);
    dif = +(presents + mainDebt).toFixed(2);
    calcDetail = { ...calcDetail, mainDebt };
    calcDetail = { ...calcDetail, dif };
    calcDetails.push(calcDetail);
  }
  console.log(calcDetails);
  return [...calcDetails];
}
