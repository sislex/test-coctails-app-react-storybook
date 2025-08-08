import React from 'react';
import './App.scss';
import {CocktailsContainer} from "./containers/CocktailsContainer/CocktailsContainer";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from './state/store';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
    return (
        <div className="App">
          <div>Counter: {counter}</div>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>
            Increment
          </button>
            <CocktailsContainer></CocktailsContainer>
        </div>
    );
}

export default App;
