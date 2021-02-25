import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Timer from './components/Timer';
import { PomodoroContext } from './contexts/Pomodoro';
import colors from './styles/colors';
import GlobalStyled from './styles/globalStyled';
import Header from './components/Header';
import Settings from './components/Settings';

const App: React.FC = () => {
  const {
    state: { working, rest },
  } = useContext(PomodoroContext);

  const [theme, setTheme] = useState(colors.work);

  useEffect(() => {
    if (working && !rest) setTheme(colors.work);
    if (rest && !working) setTheme(colors.rest);
  }, [working, rest]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Timer} />
            <Route path="/settings" component={Settings} />
            <Route path="*" component={Timer} />
          </Switch>
        </div>
      </Router>
      <GlobalStyled />
    </ThemeProvider>
  );
};

export default App;
