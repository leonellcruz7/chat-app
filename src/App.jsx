import './App.css';
import Contacts from './Components/Contacts';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login';
import { useContext, useState } from 'react';
import UserContext from './UserContext';
import { useEffect } from 'react';




function App() {

  const [user, setUser] = useState({})


  useEffect(() => {
    fetch('http://localhost:3001/user/userdetails', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json()).then(data => {
      console.log(data)
      setUser({
        id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        contact: data.contact
      })
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/' element={<Login />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
