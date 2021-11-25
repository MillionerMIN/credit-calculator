import SuperButton from '../common/button/SuperButton';
import SuperInputText from '../common/input/SuperInputText';
import style from './FormParameters.module.css';

type FormParametersPropsType = {
  summa: string;
  rate: string;
  period: number;
  method: boolean;
  onChangeSumma: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePeriod: (e: React.MouseEvent<HTMLSpanElement>) => void;
  onChangeMethodCalculation: (e: React.MouseEvent<HTMLSpanElement>) => void;
};

export const FormParameters = (props: FormParametersPropsType) => {
  const {
    summa,
    rate,
    period,
    method,
    onChangeSumma,
    onChangeRate,
    onChangePeriod,
    onChangeMethodCalculation,
  } = props;

  const entry = (
    <>
      <label className={style.parameter}>
        суммы кредита (в рублях)
        <SuperInputText
          onChange={onChangeSumma}
          value={summa}
          error={+summa === 0 || summa === null ? 'Не корректное число!' : ''}
        />
      </label>
      <label className={style.parameter}>
        процентная ставка по кредиту (в %)
        <SuperInputText
          onChange={onChangeRate}
          value={rate}
          error={+rate === 0 || rate === null ? 'Не корректное число!' : ''}
        />
      </label>
    </>
  );

  const arrButtons = [
    { value: 1, period: '1 месяц' },
    { value: 3, period: '3 месяца' },
    { value: 6, period: '6 месяцев' },
    { value: 12, period: '1 год' },
    { value: 24, period: '2 года' },
    { value: 60, period: '5 лет' },
  ];
  //элемент btn денамически отрисовывает все элементы находящиеся в массиве arrButtons
  const btn = arrButtons.map((btn, i) => (
    <SuperButton
      key={i}
      className={`${btn.value === period ? style.active : null}`}
      disabled={btn.value === period}
      data-period={btn.value}
      onClick={onChangePeriod}
    >
      {btn.period}
    </SuperButton>
  ));

  const arrMethods = [
    { name: 'Аннуитетный', active: method },
    { name: 'Дифференцированный', active: !method },
  ];
  //элемент btnMethod денамически отрисовывает все элементы находящиеся в массиве arrButtons
  const btnMethod = arrMethods.map((method, i) => (
    <SuperButton
      key={i}
      className={`${method.active ? style.active : null}`}
      disabled={method.active}
      data-method={method.name}
      onClick={onChangeMethodCalculation}
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
      <div className={style.subtitle}>Выберите метод расчета кредитования</div>
      <div className={style.methods}>{btnMethod}</div>
    </div>
  );
};
