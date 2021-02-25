import { createContext, useReducer } from 'react';
import reducer, { initialState, State } from './reducer';

export const PomodoroContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState(),
  dispatch: () => null,
});

const PomodoroReducer: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  return (
    <PomodoroContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroReducer;
