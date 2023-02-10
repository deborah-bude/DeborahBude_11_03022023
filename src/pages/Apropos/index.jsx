import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <h1>À propos</h1>
    <div>
        <ul>
            <li>Fiabilité</li>
            <li>Respect</li>
            <li>Service</li>
            <li>Responsabilité</li>
        </ul>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
