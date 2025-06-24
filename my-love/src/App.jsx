import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter import
import BirthdayWish from './components/BirthdayWish';
import MembersPage from './components/MembersPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BirthdayWish />} />
      <Route path="/members" element={<MembersPage />} />
    </Routes>
  );
}

export default App;