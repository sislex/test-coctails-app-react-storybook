import React from 'react';
import './App.scss';
import {Routes, Route,  BrowserRouter} from 'react-router-dom';
import CocktailsContainer from './containers/CocktailsContainer/CocktailsContainer';
import {NotFoundComponent} from './components/NotFoundComponent/NotFoundComponent';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CocktailsContainer />} />
                <Route path="/not-found" element={<NotFoundComponent/>} />
                <Route path="/:cocktailType" element={<CocktailsContainer />} />
                <Route path="*" element={<NotFoundComponent/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
