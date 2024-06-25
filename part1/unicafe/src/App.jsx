import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Values = (props) => (
  <div>
    {props.text} {props.values}
  </div>
);

const App = () => {
  // save clicks of each button to its own state
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
      <Values text='good' values={good} />
      <Values text='neutral' values={neutral} />
      <Values text='bad' values={bad} />
      <Values text='all' values={all} />
      <Values
        text='average'
        values={isNaN((good - bad) / all) ? 0 : (good - bad) / all}
      />
      <Values
        text='positive'
        values={isNaN((good / all) * 100) ? 0 : `${(good / all) * 100} %`}
      />
    </div>
  );
};

export default App;
