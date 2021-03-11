import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateConfig } from '../../contexts/Pomodoro/actions';
import { PomodoroContext } from '../../contexts/Pomodoro';
import { Container } from '../../styles/globalStyled';
import Button from '../Button';
import { Main } from './styled';

const Settings: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(PomodoroContext);
  const { configs } = state;
  const [timer, setTimer] = useState(configs.timer);
  const [shortBreak, setShortBreak] = useState(configs.shortBreak);
  const [longBreak, setLongBreak] = useState(configs.longBreak);
  const [cycles, setCycles] = useState(configs.cycles);

  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value) || value < 15 || value > 50) return;
    setTimer(value);
  };

  const handleShort = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value) || value < 5 || value > 10) return;
    setShortBreak(value);
  };

  const handleLong = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value) || value < 10 || value > 30) return;
    setLongBreak(value);
  };

  const handleCycles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value) || value < 4 || value > 10) return;
    setCycles(value);
  };

  const handleFinish = () => {
    dispatch(
      updateConfig({
        ...state,
        configs: { timer, shortBreak, longBreak, cycles },
      }),
    );
    history.push('/');
  };

  return (
    <Main>
      <Container>
        <div className="settings">
          <h2>Configurações</h2>
          <div className="items">
            <label>
              <p>Pomodoro</p>
              <small>{timer} min</small>
              <input
                type="range"
                value={timer}
                onChange={(e) => handleTime(e)}
                min="15"
                max="50"
              />
            </label>

            <label>
              <p>Short Break</p>
              <small>{shortBreak} min</small>
              <input
                type="range"
                value={shortBreak}
                onChange={(e) => handleShort(e)}
                min="5"
                max="10"
              />
            </label>

            <label>
              <p>Long Break</p>
              <small>{longBreak} min</small>
              <input
                type="range"
                value={longBreak}
                onChange={(e) => handleLong(e)}
                min="10"
                max="30"
              />
            </label>

            <label>
              <p>Cycles totals</p>
              <small>{cycles}</small>
              <input
                type="range"
                value={cycles}
                onChange={(e) => handleCycles(e)}
                min="4"
                max="10"
              />
            </label>
          </div>

          <div className="concluir">
            <Button onClick={() => handleFinish()}>Concluir</Button>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Settings;
