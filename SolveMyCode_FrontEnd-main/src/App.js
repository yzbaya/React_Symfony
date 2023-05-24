import { BrowserRouter,Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import QuestionsPage from "./pages/Question/QuestionsPage";
// import HomePage from "./pages/HomePage";
import Detail from "./pages/Question/DetailPage";
import "./App.css";
import UpdatingQuestion from "./pages/Question/UpdatingQuestion";
import Login from "../src/pages/Login";
import Header from "./components/Header";
// import Singup from "./pages/Singup";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<QuestionsPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<UpdatingQuestion />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;