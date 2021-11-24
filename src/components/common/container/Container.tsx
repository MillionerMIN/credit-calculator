import style from './Container.module.css';

export const Container: React.FunctionComponent = ({
  children,
}): JSX.Element => {
  return <div className={style.container}>{children}</div>;
};
