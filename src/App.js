import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import { useSelector } from 'react-redux';
import Question from './components/Question';
import Login from './components/Login';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';

function App() {

  const auth = useSelector(state => state.auth);

  return (
    <div className="App" role="application">
      {/* if auth is empty */
        auth.id ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/questions/:id" element={<Question />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        )}
    </div>
  );
}

export default App;
