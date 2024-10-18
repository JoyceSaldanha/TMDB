import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './component/Movie';
import Tv from './component/Tv';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/movie' element={<Movie></Movie>}></Route>
          <Route path='/tv' element={<Tv></Tv>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
