// import React from "react";
import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const Negara_detail = () => {

    const [Negara_detail, setdetail] = useState([])
    const {name} = useParams()

    useEffect(() => {
        const fetchCountryData = async() => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            const countryDetail = await response.json()
            setdetail(countryDetail)
            console.log(countryDetail)
        }


    fetchCountryData()
    }, [])

    return (
        <>
        <div className='btn-placement'>
            <Link to ="/Negara" className="btn"> Back To Country Page
            </Link>
        </div>
        <section className="country">
        {/* <h1>...</h1> */}
            {Negara_detail.map((c) => {
                  const {
                    name: { common, official },
                    population,
                    region,
                    capital,
                    flags,
                    currencies,
                    idd,
                    tld,
                    independent,
                    altSpellings,
                    latlng
                  }= c

        const currencyNames = currencies ? Object.values(currencies).map((c) => c.name).join(", ") : "N/A";
        const callingCode = idd ? `${idd.root}${idd.suffixes.join(", ")}` : "N/A";
        const topLevelDomain = tld ? tld.join(", ") : "N/A";
        const alternativeNames = altSpellings ? altSpellings.join(", ") : "N/A";
        const isIndependent = independent ? "Yes" : "No";
        const position = latlng || [0, 0];

  
                  return (
                    <article key={c.cca3}> 
      <div className="flag">
        <img src={flags.svg} alt={`${common} flag`} style={{ width: "150px" }} />
      </div>
      <div className="country-details">
        <h2>{common}</h2>
        <p><b>Official Name:</b> {official}</p>
        <p><b>Population:</b> {population.toLocaleString()}</p>
        <p><b>Region:</b> {region}</p>
        <p><b>Capital:</b> {capital ? capital.join(", ") : "N/A"}</p>
        <p><b>Currencies:</b> {currencyNames}</p>
        <p><b>Calling Code:</b> {callingCode}</p>
        <p><b>Top-Level Domain:</b> {topLevelDomain}</p>
        <p><b>Independent:</b> {isIndependent}</p>
        <p><b>Alternative Spellings:</b> {alternativeNames}</p>
      </div>

      <div style={{ height: "400px", marginTop: "20px" }}>
        <h3>Location</h3>
        <MapContainer center={position} zoom={5} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <b>{common}</b> <br />
              {region} - {capital ? capital.join(", ") : "N/A"}
            </Popup>
          </Marker>
        </MapContainer>
      </div>     
     
          </article>
                  )
            })
         }
        </section>
        </>
    )
}

export default Negara_detail