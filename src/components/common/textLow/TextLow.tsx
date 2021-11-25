import style from './textLow.module.css';

type TextLowPropsType = {
  num: any;
};

export const TextLow = (props: TextLowPropsType) => {
  const { num } = props;
  let firstStr, lastStr;
  let str = num.toString();
  let before = str.indexOf('.');
  if (before === -1 && str > 0) {
    firstStr = str;
  } else if (before === -1 && str < 0) {
    firstStr = '---';
  } else {
    firstStr = str.slice('.', before - 1);
    lastStr = str.slice(before, str.length);
  }

  return (
    <>
      <span className={style.first}>{firstStr}</span>
      <span className={style.last}>{lastStr}</span>
      {(before !== -1 || str > 0) && <span className={style.last}> руб</span>}
    </>
  );
};
