import React from "react";
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TodoList from './components/todo/TodoList';
import Home from './components/Home';
import NavBarExample from './layouts/Navbar';
import Footer from "./components/pok/Footer";
import Application from "./Application";

const localStorageKey = "favorite_pokemon";

function App() {

  return (
    <div className="App">

      

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='todolist' element={ <TodoList />} />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
    <Route path='pokemon' element={ <Application />} />
  </Route>
</Routes>
</BrowserRouter>
<Footer />
    </div>
  );
}



export default App;
