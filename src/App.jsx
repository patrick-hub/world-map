import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";

const BASE_URL = "http://localhost:8000";

function App() {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(function() {
		async function fetchCities() {
			try {
        setIsLoading(true)
				const res = await fetch(`${BASE_URL}/cities`);
				const data = await res.json();
				setCities(data);
			} catch {
				alert('There was an Error')
			} finally {
        setIsLoading(false)
      }
		}
    fetchCities()
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="product" element={<Product />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="login" element={<Login />} />
					<Route path="app" element={<AppLayout />}>
						<Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
						<Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
						<Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
