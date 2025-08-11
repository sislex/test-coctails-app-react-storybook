import React from 'react';
import './App.scss';
import {Routes, Route,  BrowserRouter} from 'react-router-dom';
import CocktailsContainer from './containers/CocktailsContainer/CocktailsContainer';
import {NotFoundContainer} from "./containers/NotFoundContainer/NotFoundContainer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CocktailsContainer />} />
                <Route path="/not-found" element={<NotFoundContainer/>} />
                <Route path="/:cocktailType" element={<CocktailsContainer />} />
                <Route path="*" element={<NotFoundContainer/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
