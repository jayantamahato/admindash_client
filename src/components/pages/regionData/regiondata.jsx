import React, { useState } from 'react'
import { useContext } from 'react';
import { exportValues } from '../../../App';
import { Link } from 'react-router-dom';

import './regiondata.css';

import { XAxis, YAxis, CartesianGrid, Legend, Tooltip, ScatterChart, ZAxis, Scatter } from "recharts";

const RegionData = () => {

    const [RegionName, setRegionName] = useState([]);
    const [title, setTitle] = useState([]);
    let count = 0;
    const data = useContext(exportValues);

    // for valid region  details
    const regionList = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].region !== "") {
            regionList[i] = data[i].region;
            count = count + 1;
        }
    }
    let uniqueRegionList = regionList.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);


    function onClickFunction(key) {
        setTitle(key)
        setRegionName(data.filter(data => data.region === key))
    }

    return (
        <div className="region-data">

            <div className="exit"><Link to="/">Exit</Link></div>
            <div className="region-content">
                <div className="region-list">
                    <div className="title">
                        <h6>region List</h6>
                    </div>
                    <div className="list">
                        {uniqueRegionList.map(values => (
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
                            <XAxis dataKey="intensity" name="intensity" unit="unit" />
                            <YAxis dataKey="relevance" name="Relevance" unit="unit" color='red' />
                            <ZAxis dataKey="likelihood" range={[64, 144]} name="Likelihood" unit="unit" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Legend />
                            <Scatter name={title} data={RegionName} fill="#8584d8" />

                        </ScatterChart>
                    </div>
                    <div className="details-data">
                        <div>Total Data : {data.length}</div>
                        <div>Empty region name : {(data.length) - (count)}</div>
                        <div>filled region name : {(count)}</div>
                        <div>Total region : {uniqueRegionList.length}</div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default RegionData;
