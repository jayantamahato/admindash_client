import React, { useState } from 'react'
import { useContext } from 'react';
import { exportValues } from '../../../App';
import { Link } from 'react-router-dom';

import './sectordata.css';

import { XAxis, YAxis, CartesianGrid, Legend, Tooltip, ScatterChart, ZAxis, Scatter } from "recharts";

const SectorData = () => {

    const [SectorName, setSectorName] = useState([]);
    const [title, setTitle] = useState([]);
    let count = 0;
    const data = useContext(exportValues);

    // for valid sector  details
    const sectorList = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].sector !== "") {
            sectorList[i] = data[i].sector;
            count = count + 1;
        }
    }
    let uniqueSectorList = sectorList.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);


    function onClickFunction(key) {
        setTitle(key)
        setSectorName(data.filter(data => data.sector === key))
    }

    return (
        <div className="sector-data">

            <div className="exit"><Link to="/">Exit</Link></div>
            <div className="sector-content">
                <div className="sector-list">
                    <div className="title">
                        <h6>sector List</h6>
                    </div>
                    <div className="list">
                        {uniqueSectorList.map(values => (
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
                            <Scatter name={title} data={SectorName} fill="#8584d8" />

                        </ScatterChart>
                    </div>
                    <div className="details-data">
                        <div>Total Data : {data.length}</div>
                        <div>Empty sector name : {(data.length) - (count)}</div>
                        <div>filled sector name : {(count)}</div>
                        <div>Total sector : {uniqueSectorList.length}</div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default SectorData;
