import React from 'react';
import './App.scss';
import {Routes, Route,  BrowserRouter} from 'react-router-dom';
import CocktailsContainer from './containers/CocktailsContainer/CocktailsContainer';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/:cocktailType" element={<CocktailsContainer />} />
          </Routes>
      </BrowserRouter>
    );
}

export default App;
