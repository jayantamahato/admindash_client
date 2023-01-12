import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './countrydata.css';
import { useContext } from 'react';
import { exportValues } from '../../../App';

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Tooltip,
    ScatterChart,
    ZAxis,
    Scatter
} from "recharts";


//     {
//         name: "Group A",
//         value: 400,
//     },
//     {
//         name: "Group B",
//         value: 300,
//     },
//     {
//         name: "Group C",
//         value: 300,
//     },
//     {
//         name: "Group D",
//         value: 200,
//     },
//     {
//         name: "Group E",
//         value: 278,
//     },
//     {
//         name: "Group F",
//         value: 189,
//     },
// ];

const Countrydata = () => {
    const [countryName, setCountryName] = useState([]);
    const [title, setTitle] = useState([])
    let count = 0;
    const data = useContext(exportValues);
    // for county details
    const countryList = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].country !== "") {
            countryList[i] = data[i].country;
            count = count + 1;
        }
    }
    let uniqueCountryList = countryList.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);




    // console.log(chartData);
    function onClickFunction(key) {
        setTitle(key)
        setCountryName(data.filter(data => data.country === key))
    }

    return (
        <div className="country-data">

            <div className="exit"><Link to="/">Exit</Link></div>
            <div className="country-content">
                <div className="country-list">
                    <div className="title">
                        <h6>Country List</h6>
                    </div>
                    <div className="list">
                        {uniqueCountryList.map(values => (
                            <div onClick={() => { onClickFunction(values) }}>
                                <li>{values}</li>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="details-widget">
                    <div className="pie-data">
                        <ScatterChart width={730} height={280}
                            margin={{ top: 7, right: 5, bottom: 5, left: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="relevance" name="Impact" unit="unit" />
                            <YAxis dataKey="likelihood" name="Intensity" unit="unit" color='red' />
                            <ZAxis dataKey="intensity" range={[64, 144]} name="Likelihood" unit="unit" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Legend />
                            <Scatter name={title} data={countryName} fill="#8884d8" />

                        </ScatterChart>
                    </div>
                    <div className="details-data">
                        <div>Total Data : {data.length}</div>
                        <div>Empty country name : {(data.length) - (count)}</div>
                        <div>filled country name : {(count)}</div>
                        <div>Total country : {uniqueCountryList.length}</div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Countrydata;
