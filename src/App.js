import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { createContext } from 'react';

import './App.css';

import Home from './components/pages/Home/Home';
import DataList from './components/pages/DataList/DataList'
import Barchart from './components/pages/Barchart/Barchart'
import InputForm from './components/pages/InputForm/InputForm'
import LineCharts from './components/pages/LineCharts/LineCharts';
import Countrydata from './components/pages/CountryData/Countrydata';
import { fetchData } from './services/services';
import RegionData from './components/pages/regionData/regiondata';
import SectorData from './components/pages/sectorData/sectordata';
export const exportValues = createContext();
const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchFunction() {
      const result = await fetchData();
      setData(result.data)
    }
    fetchFunction();


  }, []);
  console.log(data);

  return (
    <div className="App">
      <BrowserRouter>
        <exportValues.Provider value={data}>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />}></Route>
              <Route path='/data-list' element={<DataList />}></Route>
              <Route path='/bar-chart' element={<Barchart />}></Route>
              <Route path='/line-chart' element={<LineCharts />}></Route>
              <Route path='/form' element={<InputForm />}></Route>
              <Route path='/Countrydata' element={<Countrydata />}></Route>
              <Route path='/regiondata' element={<RegionData />}></Route>
              <Route path='/sectordata' element={<SectorData />}></Route>
            </Route>
          </Routes>
        </exportValues.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
