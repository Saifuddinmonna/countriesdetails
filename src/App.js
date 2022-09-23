import logo from "./logo.svg";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	return (
		<div className="App">
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer">
				Learn React
			</a>
			<Buttoninput></Buttoninput>
			<Localcountries></Localcountries>
			<Footer></Footer>
		</div>
	);
}

const Buttoninput = () => {
	const [message, setMessage] = useState("");

	const handleChange = (event) => {
		setMessage(event.target.value);

		console.log("value is:", event.target.value);
	};

	return (
		<div>
			<input className="input form  rounded border  m-2 p-1"
				type="text"
				id="message"
				name="message"
				onChange={handleChange}
				value={message}
			/>
			<h2>Search: {message}</h2>
			<h1>React Practice with countries</h1>
		</div>
	);
};

function Localcountries(message) {
	const url = "https://restcountries.com/v3.1/all";

	const [countries, setCountries] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);
	return (
		<div>
			<h2 className="text-dark border border-3 rounded-3 p-3 bg-light text-danger ">
				{" "}
				The Number of countries is {countries.length}
			</h2>
			<div className="dgrid container">
				{countries.map((country) => (
					<Country country={country}></Country>
				))}
			</div>
		</div>
	);
}
function Country(props) {
	console.log("currencies test", props.country.currencies);
	const {
		name,
		currencies,
		capital,
		region,
		subregion,
		area,
		maps,
		population,
		timezones,
		flags,
		startOfWeek,
		postalCode,
		coatOfArms,
		borders,
		languages,
		independent,
	} = props.country || " ";
	return (
		<div className=" singlecountry container border border-3  border-light shadow-sm m-2 p-2 rounded-3">
			<h4 className="text-primary container">
				Country : {name.common} ,
				<span>Official Name : {name.official}</span>
			</h4>
			{/* <p>
				currencies {currencies.name}
        <span>{ currencies.symbol }</span>
        
			</p> */}
			<p>The time zone of this country is {timezones}</p>
			<p> Start of the weak is {startOfWeek}</p>
			<img className="imgfluidflag img-fluid" src={flags.png} alt="" />
			<p> Capital of this country {capital}</p>
			<p>Region of the country is {region}</p>
			<p> Population of the country is {population}</p>
			<p> Total area of the country is {area}</p>
			<img className="imgfluid img-fluid " src={coatOfArms.png} alt="" />
			<p>
				{independent
					? "Independent Country"
					: "This is not A Independent Country"}
			</p>
			<p></p>
			<a href={maps.googleMaps} target="_blank" rel="noreferrer">
				Google Maps
			</a>
			<a href={maps.openStreetMaps} target="_blank" rel="noreferrer">
				Open Street Maps
			</a>
		</div>
	);
}

export default App;
