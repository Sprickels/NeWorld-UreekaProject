import React, { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'

const url = "https://restcountries.com/v3.1/all";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [numCountries, setNumCountries] = useState(4);

    const fetchCountryData = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchCountryData();
    }, []);

    return (
        <>
            <section className="home">
                <div className="intro">
                    <h1>What is NeWorld?</h1><br/><br/>
                    <p>Welcome to NeWorld, your ultimate destination for discovering detailed information about countries across the globe. Whether you're planning a trip, studying geography, or just curious about different cultures, NeWorld provides accurate and comprehensive data on every nation. Explore population statistics, cultural insights, historical backgrounds, and much more, all in one place. Join us on a journey to learn about the world's diverse countries and their unique characteristics with NeWorld!</p>

                    <div className="btn-placement">
                        <Link to ="/Negara" className="btn"> <i className="fas fa-arrow-left">Find Your Country!</i>
                        </Link>
                    </div>
                </div>
                <div className="earth"></div>

                
            </section>

        
            <section className="content">
                <h1>Featured Countries</h1>
                {isLoading ? (
                    <h1 className="loading">Loading...</h1>
                ) : (
                    <section className="kotak">
                        {countries
                        .sort((a, b) => b.population - a.population)
                        .slice(0, numCountries)
                        .map((country) => {
                            const {name, population, region, capital, flags} = country;

                            return (
                                <article key={country.cca3}>
                                    <div>
                                        <img src={flags.svg} alt={name.common} />
                                        <div className="details">
                                        <h3 className="country-name">{name.common}</h3>
                                        <h4>
                                            <b>Population:</b> {population}
                                        </h4>
                                        <h4>
                                            <b>Region:</b> {region}
                                        </h4>
                                        <h4>
                                            <b>Capital:</b> {capital}
                                        </h4>
                                            <div className="buttons">
                                                <Link to={`/Negara/${name.common}`} className="btn">
                                                    Learn more
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </section>
                )

                }
            </section>
            
            <section className="features">
                <h3>Searching Countries</h3><br />
                <p>You have a Country in mind? Well you can easily search information about the country by simply just typing the name of the country in the searchbar!</p>
                <br />
                <br />
                <h3>Filter Countries By Region</h3><br />
                <p>You wanna find a country but you only know its region? Well don't worry all you need to do is filter it by region! you can choose them at the top right of the country page!</p>
            </section>
        </>
    )
}

export default Home