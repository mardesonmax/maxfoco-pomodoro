import * as types from '../types';

export type Configs = {
  configs: {
    timer: number;
    shortBreak: number;
    longBreak: number;
    cycles: number;
  };
};

export type Pomodoro = {
  pomodoro: number;
  working: boolean;
  rest: boolean;
  restLong: boolean;
};

interface Action {
  type: string;
  payload: Configs & Pomodoro;
}

export type State = Configs & Pomodoro;

const inititalPomodoro = {
  pomodoro: 0,
  working: true,
  rest: false,
  restLong: false,
};

export const initialState = (): State => {
  const dados = localStorage.getItem('configs');
  if (dados) {
    return {
      configs: { ...JSON.parse(dados) },
      ...inititalPomodoro,
    };
  }
  return {
    configs: {
      timer: 25,
      shortBreak: 5,
      longBreak: 15,
      cycles: 4,
    },
    ...inititalPomodoro,
  };
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case types.UPDATE: {
      const newState = { ...state, ...action.payload };
      localStorage.setItem('configs', JSON.stringify({ ...newState.configs }));
      return newState;
    }

    case types.SET_POMODORO: {
      const newState = { ...state, ...action.payload };
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
