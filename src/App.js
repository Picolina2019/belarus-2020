import React from 'react';
import Bar from './Bar';

const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1>
        Why Lukashenko can't become the president of Belarus for the SIX time .
      </h1>
      <h4 style={{ fontStyle: 'italic', color: 'coral' }}>
        Current ranking of candidates for President according to the Sociology
        Institute of the National Academy of Sciences of Belarus for June 2020
      </h4>
      <span
        style={{
          textTransform: 'Uppercase',
          color: '#5e4b9c',
          marginBottom: '0.5rem',
        }}
      >
        Numbers don't lie only people with unlimited power do
      </span>
      <Bar />
    </div>
  );
};

export default App;


