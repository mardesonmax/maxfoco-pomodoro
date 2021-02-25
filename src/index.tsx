import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PomodoroReducer from './contexts/Pomodoro';

ReactDOM.render(
  <React.StrictMode>
    <PomodoroReducer>
      <App />
    </PomodoroReducer>
  </React.StrictMode>,
  document.getElementById('root'),
);
