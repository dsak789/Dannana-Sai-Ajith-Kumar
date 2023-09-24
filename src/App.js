import { Route,Routes } from 'react-router-dom';
import Profile from './components/Profile.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Profile/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
