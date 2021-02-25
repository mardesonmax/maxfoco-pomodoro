/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as types from '../types';

import { State } from './reducer';

export const updateConfig = (payload: State) => {
  return {
    type: types.UPDATE,
    payload,
  };
};

export const setPomodoro = (payload: State) => {
  return {
    type: types.SET_POMODORO,
    payload,
  };
};
