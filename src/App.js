import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import LogementDetails from "./pages/LogementDetails/index";
import Error404 from "./pages/Error/404";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/apropos" element={<About />} />
				<Route path="/logements/:id" element={<LogementDetails />} />
				<Route path="/page-non-trouvee" element={<Error404 />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
