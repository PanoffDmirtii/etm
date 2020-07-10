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
        <Header />
        <Router>
          <Switch>
            <Route exact path='/etm/catalog' component={Catalog} />
            <Route path='/etm/catalog/:id' component={ItemView} />
            <Route exact path='/etm' component={Main} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </Router>
      </ContextApp.Provider>
    </div>
  );
}

export default App;
