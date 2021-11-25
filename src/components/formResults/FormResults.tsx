import { CalculationResultsType } from '../calculat/Calculate';
import SuperButton from '../common/button/SuperButton';
import SuperInputText from '../common/input/SuperInputText';
import style from './FormResults.module.css';

type FormResultsPropsType = {
  data: CalculationResultsType;
  active: boolean;
  onOpenDetails: () => void;
};

export const FormResults = (props: FormResultsPropsType) => {
  const { data, active, onOpenDetails } = props;
  const arrDetails = [
    { subtitle: 'сумма кредита', value: data.summa },
    {
      subtitle: 'ежемесячный платёж (если платёж фиксированный)',
      value: data.dif,
    },
    {
      subtitle:
        'максимальный ежемесячный платёж (если платёж не фиксированный)',
      value: data.maxDif,
    },
    {
      subtitle: 'минимальный ежемесячный платёж (если платёж не фиксированный)',
      value: data.minDif,
    },
    { subtitle: 'общая сумма выплат по кредиту', value: data.totalAmount },
    {
      subtitle: 'общая сумма переплаты по кредиту',
      value: data.totalOverpayment,
    },
  ];

  //элемент detail денамически отрисовывает все элементы находящиеся в массиве arrDetails
  const detail = arrDetails.map((detail, i) => (
    <div className={style.detail} key={i}>
      <div className={style.title}>{detail.subtitle}</div>
      <SuperInputText value={!detail.value ? '-' : detail.value} />
    </div>
  ));

  return (
    <>
      <div className={style.formResults}>
        <div className={style.subtitle}>Результаты расчёта</div>
        <div className={style.details}>{detail}</div>
        <div className={style.button}>
          <SuperButton
            className={`${active && style.active}`}
            onClick={onOpenDetails}
          >
            Детали расчёта
          </SuperButton>
        </div>
      </div>
    </>
  );
};
