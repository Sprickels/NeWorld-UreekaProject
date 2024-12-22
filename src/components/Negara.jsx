import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    setFiltered(countries); // Set filtered to all countries initially
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  // Filter countries based on search and region
  useEffect(() => {
    let tempFiltered = countries;

    // Filter by search input
    if (searchInput) {
      tempFiltered = tempFiltered.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    // Filter by region
    if (regionFilter && regionFilter !== "All") {
      tempFiltered = tempFiltered.filter(
        (country) => country.region === regionFilter
      );
    }

    setFiltered(tempFiltered);
  }, [searchInput, regionFilter, countries]);

  const removeCountry = (cca3) => {
    const updatedCountries = countries.filter((country) => country.cca3 !== cca3);
    setCountries(updatedCountries);
    setFiltered(updatedCountries); // Update filtered list when country is removed
  };



  return (
    <>
      <section className="btn-placement">
        <Link to ="/" className="btn">Back To Home Page
        </Link>
      </section>
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
      />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <section className="kotak">
            {filtered
              .sort((a, b) => b.population - a.population) // Sort by population in descending order
              .map((country) => {
                const { name, population, region, capital, flags } = country;

                return (
                  <article key={country.cca3}>
                    <div>
                      <img src={flags.svg} alt={name.common} />
                      <div className="details">
                        <h3 className="country-name">{name.common}</h3>
                        <h4>
                          <b>Population</b>: {population}
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
                          <button
                            className="btn"
                            onClick={() => removeCountry(country.cca3)}
                          >
                            Remove Country
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
          </section>
          {filtered.length === 0 && (
            <p className="no-countries">No countries found matching your search.</p>
          )}
        </>
      )}
    </>
  );
};

export default Countries;
