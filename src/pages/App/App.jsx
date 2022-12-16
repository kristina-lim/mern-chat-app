import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import ChatPage from '../ChatPage/ChatPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      } 
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes> */}
    </main>
  );
}
