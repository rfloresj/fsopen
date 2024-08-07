import { useState } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  // Initialize the votes state
  const initialVotes = Array(anecdotes.length).fill(0);
  // Select a random  anecdote
  const randomNumber = () => Math.floor(Math.random() * anecdotes.length);

  const [votes, setVotes] = useState(initialVotes);
  const [selected, setSelected] = useState(randomNumber());

  const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>;
  };

  const handleVote = () => {
    // Create a copy of the votes array
    const votesCopy = [...votes];
    // Increment the vote for the selected anecdote
    votesCopy[selected] += 1;
    // Update the votes state with the new array
    setVotes(votesCopy);
  };

  // Anecdote with most votes
  const max = Math.max(...votes);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={handleVote} text='vote' />
      <Button
        handleClick={() => setSelected(randomNumber())}
        text='next anexdote'
      />
      <h1>Anecdote with most votes</h1>
      {max <= 0 ? (
        'None'
      ) : (
        <>
          <div>{anecdotes[votes.indexOf(max)]}</div>
          <div>{`has ${max} votes`}</div>
        </>
      )}
    </>
  );
}

export default App;
