import React from 'react'
import { NavLink } from 'react-router-dom';

function CountryData({ countryName, index }) {
    // console.log(countryName)
    let name = countryName.name.common;

    let modeName = (name.length > 10 ? (name.slice(0, 10) + "...") : (name));
    let capital = countryName.capital[0]
    let population = countryName.population
    let region = countryName.region
    let imgUrl = countryName.flags.png

    return (
        <>
            <li className="card2" key={index} >
                <img src={imgUrl} alt="asdf" />
                <h5 className="name"> {modeName}</h5>
                <div>  capital<span>  {capital}  </span></div>
                <div> population <span>  {population}  </span></div>
                <div>  region<span>  {region}  </span></div>
                <NavLink to={`/country/${name}`}>
                    <button>Read more</button>
                </NavLink >
            </li>
        </>
    )
}

export default CountryData