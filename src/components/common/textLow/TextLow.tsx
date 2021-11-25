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
    lastStr = '.00';
    if (firstStr === 0) {
      firstStr = 0;
      lastStr = '';
    }
  } else if (before === -1 && str < 0) {
    firstStr = '---';
  } else {
    firstStr = str.slice(0, before);
    lastStr = str.slice(before, str.length);
    if (firstStr === 0) {
      firstStr = 0;
    }
    if (lastStr.length < 3) {
      lastStr += '0';
    }
  }

  return (
    <>
      <span className={style.first}>{firstStr}</span>
      <span className={style.last}>{lastStr}</span>
      {(before !== -1 || str > 0) && <span className={style.last}> руб</span>}
    </>
  );
};
