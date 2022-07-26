import './App.css';
import Contacts from './Components/Contacts';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login';




function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
