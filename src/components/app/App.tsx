import { Calculate } from '../calculat/Calculate';
import { Container } from '../common/container/Container';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Container>
        <h2 className={style.title}>"Кредитный калькулятор"</h2>
        <Calculate />
      </Container>
    </div>
  );
}

export default App;
