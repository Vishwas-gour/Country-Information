import React from 'react'
import countryApi from "../api/country.json"
import '../css/home.css'

function Home() {
  console.log(countryApi.country);

  let data = countryApi.country.map((country) => {
    return (
      <div className="card">
        <h5 className="name"> {country.countryName}</h5>
        <div>capital : <span>{country.capital}</span></div>
        <div>population : <span>{country.population}</span></div>
        <div>interestingFact : <span>{country.interestingFact}</span></div>
      </div>
    )
  });
  

  return (
    <>
      <h1 >Coutry</h1>
      <div className='cards countainer'>
        {data}
      </div>
    </>
  )
}

export default Home;