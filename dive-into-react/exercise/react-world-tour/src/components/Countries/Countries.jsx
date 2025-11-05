import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    let [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountry = (country) => {
        console.log(country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleKeyUp = (event) => {
        const searchKey = event.target.value;
        console.log(searchKey)
    }
    const handleClearAll = () => {
        visitedCountries = []
        setVisitedCountries(visitedCountries)
    }
    return (
        <div>
            <div>
                <div className='countries-nav'>
                    <div><h2>Countries</h2></div>
                    <div><input onKeyUp={handleKeyUp} type="text" placeholder='Search by code' /></div>
                </div>
                <div className='visited-country-container'>
                    <div className='total-visited-country'>
                        <div>
                            <h5>Visited Countries: {visitedCountries.length}</h5>
                        </div>

                        <div>
                            <button onClick={handleClearAll}>Clear All</button>
                        </div>
                    </div>

                    <div>
                        {/* <ol>
                            {
                                visitedCountries.map(country => {
                                    return (<li key={country?.cca}>{country?.name?.common}</li>)
                                })
                            }
                        </ol> */}
                        <div className='country-container'>
                            {
                                visitedCountries.map(country => <Country handleVisitedCountry={handleVisitedCountry} key={country.cca} country={country}></Country>)
                            }
                        </div>
                    </div>
                </div>
                <div className='country-container'>
                    {
                        countries.map(country => <Country handleVisitedCountry={handleVisitedCountry} key={country.cca} country={country}></Country>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;