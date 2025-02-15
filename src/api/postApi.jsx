import axios from "axios";

const api = axios.create({
    baseURL: `https://restcountries.com/v3.1`
});

//  HTTP request for the All countries
function getCountryData() {
    return api.get(`/all?fields=name,population,region,capital,flags`)
}

//  HTTP request for the individual country

function getCountryDataByName(name) {
    return api.get(`/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}
export { getCountryData, getCountryDataByName };
