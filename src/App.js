
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/header/header';
import HomePage from './Pages/Home/home';
import MovieList from './component/movieList/jsmovielist';
import MovieDetail from './Pages/pagedetail/movieDetail';

function App() {
    

  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>Err Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
