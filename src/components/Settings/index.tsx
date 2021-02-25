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
    if (isNaN(value) || value < 0 || value > 50) return;
    setTimer(value);
  };

  const handleShort = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value) || value < 0 || value > 10) return;
    setShortBreak(value);
  };

  const handleLong = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value) || value < 0 || value > 30) return;
    setLongBreak(value);
  };

  const handleCycles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (isNaN(value) || value < 0 || value > 10) return;
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
              <input
                type="number"
                value={timer}
                onChange={(e) => handleTime(e)}
              />
            </label>

            <label>
              <p>Descaço curto</p>
              <input
                type="number"
                value={shortBreak}
                onChange={(e) => handleShort(e)}
              />
            </label>

            <label>
              <p>Descaço longo</p>
              <input
                type="number"
                value={longBreak}
                onChange={(e) => handleLong(e)}
              />
            </label>

            <label>
              <p>Ciclos total</p>
              <input
                type="number"
                value={cycles}
                onChange={(e) => handleCycles(e)}
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
