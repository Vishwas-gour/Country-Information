import React, { useState, useEffect, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import CountryData from '../Components/CountryData';
import "../css/country.css"



function Country() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState();
    const [update, setUpdate] = useState(true); //==> update:-dependency when requared
    const [orderSign, setOrderSign] = useState("Normal");

    // till startTransition() processign the value of isPending is false otherwise true
    const [isPending, startTransition] = useTransition();
    useEffect(() => {
        startTransition(async () => {
            let response = await getCountryData();
            setData(response.data);
        });
    }, [update]);//==> update:-dependency when requared


    function sortCountryFunction(order) {
        const country = [...data].sort((a, b) => {
            if (order === 1) {
                setOrderSign("Ascending");
                return a.name.common.localeCompare(b.name.common);
            }
            else if (order === 2) {
                setOrderSign("Descendin");
                return b.name.common.localeCompare(a.name.common);
            }
            else {
                setOrderSign("Default");
                setUpdate(!update);
            }
        });
        setData(country);
    }

    let all = <ul className='cards2-row'>
        {data.map((currentCountry, index) => {
            // CONDITIONAL RENDERIGN WHILE SEACHING
            if (input) {
                if (currentCountry.name.common.toLowerCase().includes(input.toLowerCase())) {
                    return (
                        <CountryData countryName={currentCountry} index={index} />
                    )
                }
            }
            else {
                return (
                    <CountryData countryName={currentCountry} index={index} />
                )
            }

        })}
    </ul>

    // console.log(data);

    return (
        <div className='countainer1'>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <div style={{ display: "flex", gap: "2rem" }}>
                <span style={{ color: "white" }}> {orderSign}</span>
                <button onClick={() => sortCountryFunction(1)}>🢁</button>
                <button onClick={() => sortCountryFunction(2)}>🢃</button>
                <button onClick={() => sortCountryFunction(3)}>Reset</button>
            </div>
            {(isPending) ? <span className="loader"></span> : all}
        </div>
    )
}

export default Country