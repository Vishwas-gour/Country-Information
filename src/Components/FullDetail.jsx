import React, { useEffect, useState, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCountryDataByName } from '../api/postApi';
import "../css/fulldetail.css"


function CountryDetail() {
    const navigate = useNavigate();
    let [data, setData] = useState(null);
    let { countryName } = useParams();
    let [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            const response = await getCountryDataByName(countryName);
            if (response.status === 200) {
                setData(response.data[0]);
            }
        });
    }, []);

    console.log(data);

    return (
        <>
        <div className='countainer3'>
            
            {(data) ? (

                <div className='card3'>
                    <div className='image-div'><img width="100" src={data.flags.svg} alt="not fount" /></div>
                    <div className='detail-div'>
                        <h2 > <span>{data.name.common} </span></h2>
                        <div>Official Name : <span>{data.name.official} </span></div>
                        <div>Capital : <span>{data.capital[0]} </span></div>
                        <div>Languaged : <span>{Object.values(data.languages)}</span></div>
                        <div>Subregion : <span>{data.subregion} </span></div>
                        <div>Region : <span>{data.region} </span></div>
                        <div>Population : <span>{data.population} </span></div>
                        <div>Borders : <span>{data.borders.toString()} </span></div>
                        <div>Natives : <span>{Object.keys(data.name.nativeName).toString()} </span></div>
                        <div>Currency <span>{Object.values(data.currencies)[0].name} ({Object.values(data.currencies)[0].symbol})</span></div>
                    </div>
                </div>
            ) : (<div className='loader'></div>)}

        </div>
            <button style={{position:"absolute", bottom:"40px", right:"30px"}}  onClick={(e) => navigate("/country")}>Go to Country</button>
        </>
    )
}
export default CountryDetail