import { Route,Routes } from 'react-router-dom';
import Profile from './components/Profile.js'
import Main from './components/Portfolio/Main.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
