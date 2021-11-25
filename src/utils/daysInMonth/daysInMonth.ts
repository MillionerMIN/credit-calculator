//функция получения количества дней в месяце
export function daysInMonth(anyDateInMonth: any) {
  return new Date(
    anyDateInMonth.getFullYear(),
    anyDateInMonth.getMonth() + 1,
    0
  ).getDate();
}
