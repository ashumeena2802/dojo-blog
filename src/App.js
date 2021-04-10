import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {
const likes = 50;
const count = [10,20,30]
const link = "http://www.google.com"



  return (
    <div className="App">
    <Navbar/>
      <div className="content">
      <Home/>
      <p>Liked {likes} times</p>
      <p>{Math.round(23.4) * 10}</p>
      <a href={link}>Google Site</a>

      </div>
    </div>
  );
}

export default App;
