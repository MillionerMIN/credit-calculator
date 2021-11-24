import SuperButton from '../common/button/SuperButton';
import SuperInputText from '../common/input/SuperInputText';
import style from './FormParameters.module.css';

export const FormParameters = () => {
  const arrDataEntry = [
    { name: 'суммы кредита (в рублях)', value: 1000 },
    { name: 'процентная ставка по кредиту (в %)', value: 20 },
  ];

  const entry = arrDataEntry.map((item, i) => (
    <div className={style.parameter} key={i}>
      <div className={style.title}>{item.name}</div>
      <SuperInputText value={item.value} />
    </div>
  ));

  const arrButtons = [
    { value: 1, period: 'месяц' },
    { value: 3, period: 'месяца' },
    { value: 6, period: 'месяцев' },
    { value: 1, period: 'год' },
    { value: 2, period: 'года' },
    { value: 5, period: 'лет' },
  ];
  //элемент btn денамически отрисовывает все элементы находящиеся в массиве arrButtons
  const btn = arrButtons.map((btn, i) => (
    <SuperButton key={i}>
      {btn.value} {btn.period}
    </SuperButton>
  ));

  return (
    <div className={style.formParameters}>
      <div className={style.subtitle}>Форма ввода параметров кредита</div>
      <div className={style.parameters}>{entry}</div>
      <div className={style.subtitle}>Выберите срок кредитования</div>
      <div className={style.loanTerm}>{btn}</div>
    </div>
  );
};
