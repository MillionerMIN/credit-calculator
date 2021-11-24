import SuperButton from '../common/button/SuperButton';
import SuperInputText from '../common/input/SuperInputText';
import style from './FormResults.module.css';

export const FormResults = () => {
  const arrDetails = [
    { subtitle: 'сумма кредита' },
    { subtitle: 'ежемесячный платёж (если платёж фиксированный)' },
    {
      subtitle:
        'максимальный ежемесячный платёж (если платёж не фиксированный)',
    },
    {
      subtitle: 'минимальный ежемесячный платёж (если платёж не фиксированный)',
    },
    { subtitle: 'общая сумма выплат по кредиту' },
    { subtitle: 'общая сумма переплаты по кредиту' },
  ];

  //элемент detail денамически отрисовывает все элементы находящиеся в массиве arrDetails
  const detail = arrDetails.map((detail, i) => (
    <div className={style.detail} key={i}>
      <div className={style.title}>{detail.subtitle}</div>
      <SuperInputText />
    </div>
  ));

  return (
    <>
      <div className={style.formResults}>
        <div className={style.subtitle}>Результаты расчёта</div>
        <div className={style.details}>{detail}</div>
        <div className={style.button}>
          <SuperButton>Детали расчёта</SuperButton>
        </div>
      </div>
    </>
  );
};
