import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Catalog } from './components/Catalog';
import { Header } from './components/Header';
import { ItemView } from './components/ItemView';
import { Main } from './components/Main';
import { PageNotFound } from './components/PageNotFound';
import './index.css';
import { ContextApp, initialState, reducer } from './store/reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <ContextApp.Provider value={{ dispatch, state }}>
      <Router basename='/etm'>
        <Header />
          <Switch>
            <Route exact path='/catalog' component={Catalog} />
            <Route path='/catalog/:id' component={ItemView} />
            <Route exact path='/' component={Main} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </Router>
      </ContextApp.Provider>
    </div>
  );
}

export default App;
