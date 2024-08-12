import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import api from './Api';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/score' element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await api.post('/check_login', {
        username: username,
        password: password
      });

      if (response.status === 200) {
        sessionStorage.setItem('username', response.data.username);
        sessionStorage.setItem('score', response.data.score);
        alert('로그인 성공했습니다.');
        window.location.href = '/score'; // 페이지 이동
      } else {
        alert('로그인 실패했습니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('로그인 오류가 발생했습니다.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form className="login" onSubmit={handleLogin}>
          <label htmlFor="username">USERNAME</label>
          <input type='text' id="username" placeholder='USERNAME' onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="password">PASSWORD</label>
          <input type='password' id="password" placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>LOGIN</button>
        </form>
      </header>
    </div>
  );
}

function Score() {
  const [username, setUsername] = useState(sessionStorage.getItem('username'));
  const [score, setScore] = useState(sessionStorage.getItem('score') || 0);

  const handleScoreSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/check_score', {
        username: sessionStorage.getItem('username'),
        score: score
      });

      if (response.status === 200) {
        sessionStorage.setItem('score', response.data.score);
        alert('점수가 업데이트 되었습니다.');
      } else {
        alert('점수 업데이트 실패했습니다.');
      }
    } catch (error) {
      console.error('점수 업데이트 오류:', error);
      alert('점수 업데이트 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form className="score" onSubmit={handleScoreSubmit}>
          <h3>{username}</h3>
          <div>
            <label htmlFor="score">SCORE</label>
            <input type='number' id="score" value={score} onChange={(e) => setScore(e.target.value)} />
          </div>
          <button type='submit'>APPLY</button>
        </form>
      </header>
    </div>
  );
}

export default App;

// npm start