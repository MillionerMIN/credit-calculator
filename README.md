<h1 style='color: #3390c1;'>SPA "Кредитный калькулятор" </h1>

Language of development:<h3 style='color:#3178c6;'> <strong>TypeScript</strong></h3>
<img src="https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg" width="100" />

Technology: <h3 style='color:#61dafb;'> <strong>ReactJS</strong></h3>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="100" />

  <ul>
      <li>Приложение позволяет выполнить расчёт платежей по кредиту по заданным параметрам.</li>
  </ul>

![alt text](https://github.com/MillionerMIN/credit-calculator/blob/main/src/img/Credit-calculator.gif)

<h3 style='color: #3390c1'>Приложение содержать следующие визуальные блоки:</h3>
    <ul>
      <li>форма ввода параметров кредита</li>
      <li>блок с основными результатами расчёта</li>
      <li>блок с деталями расчёта</li>
    </ul>

<h3 style='color: #3390c1'> Для расчёта платежей по кредиту используется два метода</h3>

<ol>
  <li> <b style='color: rgb(197, 165, 197) '>Аннуитетный платёж</b> – это платёж, который устанавливается в равной сумме через равные промежутки времени. Так, при аннуитетном графике погашения кредита вы ежемесячно платите одну и ту же сумму, независимо от остатка задолженности.
  Формула расчёта суммы ежемесячного платежа при аннуитетной схеме погашения следующая:

    A = K * S
    где А – сумма ежемесячного аннуитетного платежа,
    К - коэффициент аннуитета,
    S - сумма кредита.
    Сумма кредита известна. А для расчёта К – коэффициента аннуитета, используется следующая формула:

    K = i * (1 + i)^n / (1 + i)^n - 1 ;

    где i - процентная ставка по кредиту в месяц (рассчитывается как годовая, делённая на 12 месяцев)
    n - количество периодов (месяцев) погашения кредита.

  </li>
  <li> <b style='color: rgb(197, 165, 197) '>Дифференцированные платежи</b> – платежи при погашении кредита, размер которых уменьшается к концу периода погашения, сообразно с уменьшением суммы невыплаченного долга.
  
    Расчет размера дифференцированного платежа производится в три этапа:
      
      S%1 = S * i,

      где S%1 – сумма процентов за первый месяц,

      S - сумма кредита.

      i - процентная ставка по кредиту в месяц (рассчитывается как годовая, делённая на 12 месяцев).

      За второй и следующие месяцы:

      S%n = (S - ∆S) * i,

      где ∆S – сумма погашенного основного долга.

1. Сначала вычисляется «тело кредита», то есть ежемесячный платеж в счет погашения основного долга. Он будет равен отношению всей суммы кредита к количеству платежных периодов (месяцев) во всем сроке кредитования.
2. Далее рассчитывается ежемесячная сумма подлежащих к уплате процентов. Она равняется остатку основного долга в текущем периоде помноженному на годовую процентную ставку, пропорционально относящуюся к текущему платежному периоду, то есть разделенную на количество дней в году (365 или 366) и умноженной на число дней в платежном периоде (от 28 до 31).
3. Сложив результаты двух предыдущих вычислений получим сумму ежемесячного дифференцированного платежа.

  </li>
</ol>

<h3 style='color: #3390c1'>Значения по умолчанию для формы ввода:</h3>

<ul>
<li>сумма = 10000</li>
<li>срок = 1 год</li>
<li>процентная ставка = (ставка рефинансирования НБРБ на текущую дату) + 5 п.п.</li>
</ul>
Для получения ставки рефинансирования использовать API. См.

[https://www.nbrb.by/apihelp/refinancingrate](https://www.nbrb.by/apihelp/refinancingrate)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
