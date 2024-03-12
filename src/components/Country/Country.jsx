import { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountry , handleVisitedFlags}) => {
    const {name , flags , population ,area , cca3} = country;
    const [visited , setVisited] = useState(false);


    const handleVisited = () =>{
        setVisited(!visited);
    }
    

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3> Country Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark to Visit</button> <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button> <br />
            <button onClick={ handleVisited }>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'I have visit this country' : 'I want to visit'}
        </div>
    );
};

export default Country;