import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import { useSelector } from 'react-redux';
import Question from './components/Question';
import Login from './components/Login';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import New from './components/Question/New';
import PageNotFound from './components/PageNotFound';

function App() {

  const auth = useSelector(state => state.auth);

  return (
    <div className="App" role="application">
      {/* if auth is not empty */
        auth.id ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/questions/:id" element={<Question />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/add" element={<New />} />
              <Route path="/uhoh" element={<PageNotFound />} />
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
