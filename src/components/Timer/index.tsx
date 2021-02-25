import { Display, Pomodoro } from './styled';
import { useContext, useEffect, useState } from 'react';

import FormateToTimer from '../../utils/formatToTimer';
import useInterval from '../../hooks/useInterval';
import Seconds from '../../utils/minuteToSecond';
import Button from '../Button';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';
import { PomodoroContext } from '../../contexts/Pomodoro/';
import { Container } from '../../styles/globalStyled';
import { setPomodoro } from '../../contexts/Pomodoro/actions';

const sound = (src: string) => {
  const audio = new Audio(src);
  return audio;
};

const finish = sound('/sounds/finish.mp3');
const start = sound('/sounds/start.mp3');

const Timer: React.FC = () => {
  const { state, dispatch } = useContext(PomodoroContext);

  const { configs, pomodoro, working, rest, restLong } = state;
  const { timer, shortBreak, longBreak, cycles } = configs;

  const [init, setInit] = useState(false);
  const [mainTime, setMainTime] = useState(0);

  useEffect(() => {
    if (init) {
      document.title = `${FormateToTimer(mainTime)} - MAXFOCO`;
    } else {
      document.title = `MAXFOCO`;
    }
  }, [mainTime, init]);

  useEffect(() => {
    if (init) {
      start.play();
    }
  }, [init]);

  useInterval(
    () => {
      if (mainTime > 0) {
        setMainTime(mainTime - 1);
        return;
      }
      setInit(false);

      if (working && !rest) {
        dispatch(
          setPomodoro({
            ...state,
            pomodoro: pomodoro + 1,
          }),
        );
      }

      if (rest && !working) {
        if (pomodoro >= cycles) {
          console.log(pomodoro);
          handleWorkin(true);
        } else {
          handleWorkin();
        }
      }
      finish.play();
    },
    init ? 1000 : null,
  );

  useEffect(() => {
    if (working && !rest && pomodoro > 0 && pomodoro < cycles) {
      handleRest(false);
    } else if (working && !rest && pomodoro >= cycles) {
      handleRest(true);
    }
  }, [pomodoro]);

  useEffect(() => {
    if (working && !rest) {
      setMainTime(Seconds(timer));
    } else if (rest && restLong) {
      setMainTime(Seconds(longBreak));
    } else {
      setMainTime(Seconds(shortBreak));
    }
  }, [working, rest, restLong]);

  const handleWorkin = (pomo = false) => {
    setInit(false);
    dispatch(
      setPomodoro({
        ...state,
        working: true,
        rest: false,
        pomodoro: pomo ? 0 : pomodoro,
      }),
    );
  };

  const handleRest = (restLong: boolean) => {
    setInit(false);
    dispatch(
      setPomodoro({
        ...state,
        working: false,
        rest: true,
        restLong,
      }),
    );
  };

  const handleInit = () => {
    setInit(!init);
  };

  const handleStop = () => {
    setInit(false);
    if (working && !rest) {
      setMainTime(Seconds(timer));
    } else if (rest && restLong) {
      setMainTime(Seconds(longBreak));
    } else {
      setMainTime(Seconds(shortBreak));
    }
  };

  return (
    <Pomodoro>
      <Container className="item">
        <div className="menu">
          <Button
            onClick={() => handleWorkin()}
            className={working ? 'active' : ''}
          >
            Pomodoro
          </Button>
          <Button
            onClick={() => handleRest(false)}
            className={rest && !restLong ? 'active' : ''}
          >
            Short Break
          </Button>
          <Button
            onClick={() => handleRest(true)}
            className={rest && restLong ? 'active' : ''}
          >
            Long Break
          </Button>
        </div>

        <Display>
          <h1>{FormateToTimer(mainTime)}</h1>
        </Display>

        <div className="controllers">
          {!init ? (
            <Button onClick={() => handleInit()}>
              <FaPlay />
            </Button>
          ) : (
            <Button onClick={() => handleInit()}>
              <FaPause />
            </Button>
          )}

          <Button onClick={() => handleStop()}>
            <FaStop />
          </Button>
        </div>

        <div className="info">
          <p>
            Pomodoros concluídos {pomodoro} de {cycles}, complete os {cycles} e
            ganhe uma pausa longa 😉
          </p>
        </div>
      </Container>
    </Pomodoro>
  );
};

export default Timer;
