import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(function () {
		async function fetchCities() {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}/cities`);
				const data = await res.json();
				setCities(data);
			} catch {
				alert("There was an Error");
			} finally {
				setIsLoading(false);
			}
		}
		fetchCities();
	}, []);

	return (
		<CitiesContext.Provider value={{cities, isLoading}}>
			{children}
		</CitiesContext.Provider>
	);
}

function useCities() {
    const context = useContext(CitiesContext)
    if (context === undefined) throw new Error('Error')
    return context
}


CitiesProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export  { CitiesProvider, useCities };