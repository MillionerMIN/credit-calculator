import SuperButton from '../common/button/SuperButton';
import SuperInputText from '../common/input/SuperInputText';
import style from './FormParameters.module.css';

type FormParametersPropsType = {
  onChangeMethodCalculation: () => void;
};

export const FormParameters = (props: FormParametersPropsType) => {
  const { onChangeMethodCalculation } = props;
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
    { value: 1, period: 'месяц', active: false },
    { value: 3, period: 'месяца', active: false },
    { value: 6, period: 'месяцев', active: true },
    { value: 1, period: 'год', active: false },
    { value: 2, period: 'года', active: false },
    { value: 5, period: 'лет', active: false },
  ];
  //элемент btn денамически отрисовывает все элементы находящиеся в массиве arrButtons
  const btn = arrButtons.map((btn, i) => (
    <SuperButton key={i} disabled={btn.active}>
      {btn.value} {btn.period}
    </SuperButton>
  ));

  const arrMethods = [
    { name: 'Аннуитетный', active: true },
    { name: 'Дифференцированный', active: false },
  ];
  //элемент method денамически отрисовывает все элементы находящиеся в массиве arrButtons
  const method = arrMethods.map((method, i) => (
    <SuperButton
      key={i}
      onClick={onChangeMethodCalculation}
      disabled={method.active}
    >
      {method.name}
    </SuperButton>
  ));

  return (
    <div className={style.formParameters}>
      <div className={style.subtitle}>Форма ввода параметров кредита</div>
      <div className={style.parameters}>{entry}</div>
      <div className={style.subtitle}>Выберите срок кредитования</div>
      <div className={style.loanTerm}>{btn}</div>
      <div className={style.subtitle}>Выберите срок кредитования</div>
      <div className={style.methods}>{method}</div>
    </div>
  );
};
