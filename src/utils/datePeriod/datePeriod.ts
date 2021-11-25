//функция выводит даты платежей по кредиту
export const datePeriod = (nowDate: Date, period: number) => {
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  let arrDate = [];
  const date = nowDate.getDate();
  let month = nowDate.getMonth();
  let year = nowDate.getFullYear();

  if (month === 12) {
    month = 0;
    year++;
  }

  for (var i = 0; i < period; i++) {
    arrDate.push(
      date < 10
        ? +('0' + date.toString())
        : date + '-' + months[month++] + '-' + year
    );

    if (month === 12) {
      month = 0;
      year++;
    }
  }
  return arrDate;
};

//функция получения количества дней в месяце
export function daysInMonth(anyDateInMonth: any) {
  return new Date(
    anyDateInMonth.getFullYear(),
    anyDateInMonth.getMonth() + 1,
    0
  ).getDate();
}
