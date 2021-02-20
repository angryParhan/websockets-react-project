import { Route, Switch, useLocation } from "react-router-dom";
import Home from './views/Home/Home.js'
import Currencies from "./views/Currencies/Currencies.js";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const RouterWrapper = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      component: Home
    },
    {
      path: '/currencies',
      exact: true,
      component: Currencies
    },
  ]
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="slide"
        timeout={1000}
      >
        <Switch location={location}>
          {routes.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              component={item.component}
            />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouterWrapper;