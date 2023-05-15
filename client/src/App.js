import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./views/Main";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
          <Route element={<Detail/>} path="/:id" />
      </Routes>
    </div>
  );
}

export default App;
