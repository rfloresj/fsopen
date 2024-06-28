import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);

const Statistics = (props) => (
  <div>
    <StatisticLine text='good' value={props.good} />
    <StatisticLine text='neutral' value={props.neutral} />
    <StatisticLine text='neutral' value={props.bad} />
    <StatisticLine text='all' value={props.all} />
    <StatisticLine text='average' value={props.average} />
    <StatisticLine text='positive' value={props.positive} />
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const count = [good, neutral, bad];
  const all = count.reduce((acc, value) => acc + value, 0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <div>No feedback given</div>
      ) : (
        <>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={isNaN((good - bad) / all) ? 0 : (good - bad) / all}
            positive={isNaN((good / all) * 100) ? 0 : `${(good / all) * 100} %`}
          />
        </>
      )}
    </div>
  );
};

export default App;
