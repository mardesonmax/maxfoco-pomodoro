import { Display, Pomodoro } from './styled';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { DefaultTheme } from 'styled-components';
import FormateToTimer from '../../utils/formatToTimer';
import useInterval from '../../hooks/useInterval';
import Seconds from '../../utils/minuteToSecond';
import Button from '../Button';
import { FaPlay, FaPause } from 'react-icons/fa';
import { PomodoroContext } from '../../contexts/Pomodoro/';
import { Container } from '../../styles/globalStyled';
import { setPomodoro } from '../../contexts/Pomodoro/actions';

type Props = {
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
};

const Timer: React.FC<Props> = () => {
  const { state, dispatch } = useContext(PomodoroContext);

  const { configs, pomodoro, working, rest, restLong } = state;
  const { timer, shortBreak, longBreak, cycles } = configs;

  const [init, setInit] = useState(false);
  const [mainTime, setMainTime] = useState(0);

  useEffect(() => {
    document.title = `${FormateToTimer(mainTime)} - MAXFOCO`;
  }, [mainTime]);

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
