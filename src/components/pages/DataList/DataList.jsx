import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { exportValues } from "../../../App";
import "./dataList.css";

import SideNav from "../../SideNav";
import TopNav from "../../topNav";


const columns = [
  { field: "country", headerName: "COUNTRY", width: 100 },
  { field: "impact", headerName: "IMPACT", width: 65 },
  { field: "insight", headerName: "INSIGHT", width: 100 },
  { field: "likelihood", headerName: "LIKELIHOOD", width: 100 },
  { field: "pestle", headerName: "PESTLE", width: 100 },
  { field: "region", headerName: "REGION", width: 100 },
  { field: "sector", headerName: "SECTOR", width: 100 },
  { field: "source", headerName: "SOURCE", width: 100 },
  { field: "start_year", headerName: "START YEAR", width: 100 },
  { field: "end_year", headerName: "END YEAR", width: 100 },
  { field: "topic", headerName: "TOPIC", width: 100 },
];



const DataList = () => {
  const data = useContext(exportValues)

  return (
    <div className="DataList">
      <SideNav />
      <div className="data-list-contents">
        <TopNav />
        <div className="contents">
          <div className="title">Data List</div>
          <div style={{ height: 550, width: "100%" }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={8}
              rowsPerPageOptions={[5]}
              getRowId={(row) => row._id}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataList;
