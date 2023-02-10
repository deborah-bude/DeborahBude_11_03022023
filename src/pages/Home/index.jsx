import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <h1>Chez vous, partout et ailleurs</h1>
    <div>
        <ul>
            <li>Logement 1</li>
            <li>Logement 2</li>
            <li>Logement 3</li>
        </ul>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
