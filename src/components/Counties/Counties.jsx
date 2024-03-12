import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Counties = () => {
    const [countries , getCountries] = useState([]);
    const [visitedCountry , setVisitedCountry] = useState([]);
    const [visitedFlags , setVisitedFlags] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data => getCountries(data));

    }, [])

    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountry , country];
        setVisitedCountry(newVisitedCountry)
    }

    const handleVisitedFlags = flags => {
        const newFlags = [...visitedFlags , flags]
        setVisitedFlags(newFlags);
    }
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Country : {visitedCountry.length}</h5>
                <ul>
                    {
                        visitedCountry.map(country =><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag">
                {
                    visitedFlags.map((flag , idx) => <img src={flag} key={idx}></img>)
                }
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country country={country}
                         handleVisitedCountry ={ handleVisitedCountry } 
                         handleVisitedFlags = {handleVisitedFlags}
                         key={country.cca3}></Country>) 
                }
            </div>
        </div>
    );
};

export default Counties;