// import React from "react";

// const Filter = () => {
//     window.addEventListener('DOMContentLoaded', () => {
//         const search = document.getElementById('search')
    
    
//         search.addEventListener('input', (e) => {
//             const {value} = e.target
    
//             const country_name = document.querySelectorAll('.country-name')
    
//             country_name.forEach((name) => {
//                 if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
//                     name.parentElement.parentElement.style.display = 'block'
//                 } else {
//                     name.parentElement.parentElement.style.display = 'none'
//                 }
//             })        
//         })
//     })



//     return (
//         <>
//          <section className="filter">
//             <form action="" className="form-control">
//                 <input type="search" name="search" id= "search"
//                 placeholder= "Cari Negara apa" />
//             </form>

//             <div className="region-filter">
//                 <select name="select" id="select" className="select" >
//                     <option value="Filter by region">Filter by region</option>
//                     <option value="America">america</option>
//                     <option value="Africa">africa</option>
//                     <option value="Asia">Asia</option>
//                     <option value="Europe">Europe</option>
//                     <option value="Oceania">Oceania</option>
//                 </select>
//             </div>
//          </section>
//         </>
//     )
// }

// export default Filter

// import React, { useEffect } from "react"

// const Filter = ({
//   searchInput,
//   setSearchInput,
//   setFiltered,
//   setCountries,
//   countries,
// }) => {
//   const regions = [
//     {
//       name: "Filter by region",
//       desc: "All",
//     },
//     {
//       name: "Africa",
//       desc: "Africa",
//     },
//     {
//       name: "Americas",
//       desc: "Americas",
//     },
//     {
//       name: "Asia",
//       desc: "Asia",
//     },
//     {
//       name: "Europe",
//       desc: "Europe",
//     },
//     {
//       name: "Oceania",
//       desc: "Oceania",
//     },
//   ]

//   // Prevent page reload when submitting the form
//   const handleSubmit = (e) => {
//     e.preventDefault()
//   }

//   // Search countries
//   const searchCountries = (searchValue) => {
//     setSearchInput(searchValue)

//     if (searchInput) {
//       const filteredCountries = countries.filter((country) =>
//         Object.values(country)
//           .join("")
//           .toLowerCase()
//           .includes(searchValue.toLowerCase())
//       )
//       setFiltered(filteredCountries)
//     } else {
//       setFiltered(countries)
//     }
//   }

//   // Filter by region

//   const filterRegions = async (region) => {
//     const url = `https://restcountries.com/v3.1/region/${region}`
//     const res = await fetch(url)
//     const data = await res.json()
//     setCountries(data)
//   }

//   useEffect(() => {
//     filterRegions()
//     // eslint-disable-next-line
//   }, [])

//   return (
//     <>
//       <form className="form" id="form" onSubmit={handleSubmit}>
//         <input
//           type="search"
//           name="search"
//           id="search"
//           autoComplete="off"
//           placeholder="Search Country"
//           onChange={(e) => searchCountries(e.target.value)}
//         />

//         <div className="select">
//           <select
//             name="select"
//             id="select"
//             onChange={(e) => filterRegions(e.target.value)}
//             value={regions.name}
//           >
//             <option value="All">All Regions</option>
//             <option value="africa">africa</option>
//             <option value="asia">asia</option>
//             <option value="europe">europe</option>
//             <option value="americas">americas</option>
//             <option value="oceania">oceania</option>
//           </select>
//         </div>
//       </form>
//     </>
//   )
// }

// export default Filter

import React from "react";

const Filter = ({ searchInput, setSearchInput, regionFilter, setRegionFilter }) => {
  return (
    <section className="filter">
      {/* Search input */}
      <form action="" className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // Update search input state
        />
      </form>

      {/* Region dropdown */}
      <div className="region-filter">
        <select
          name="select"
          id="select"
          className="select"
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)} // Update region filter state
        >
          <option value="All">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;

