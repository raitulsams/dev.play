import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry }) => {
    // console.log(country)
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div>
            <div className={`country ${visited ? 'visited' : ''}`}>
                <p> Name: {name?.common} </p>
                <p> Population: {population} </p>
                <p> Area: {area}, Code: {cca3} </p>
                <img className="flag" src={flags.png} />
                <div className='btn-container'>
                    <button onClick={handleVisited} >{visited ? 'Visited' : 'Not yet'}</button>
                    <button onClick={() => { handleVisitedCountry(country) }}> Mark Visited</button>
                </div>

            </div>
        </div>
    );
};

export default Country;