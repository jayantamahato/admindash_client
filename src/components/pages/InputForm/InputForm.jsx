import React from "react";
import SideNav from "../../SideNav";
import TopNav from "../../topNav";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./inputForm.css";
import { useState } from "react";

const InputForm = () => {
  const [data, setData] = useState();
  function handleSubmit(e) {
    e.preventDefault();

    // console.log(data);
  }

  return (
    <div className="inputForm">
      <SideNav />
      <div className="forms-field">
        <TopNav />
        <div className="entry-form">
          <div className="title">Data Submition Form</div>
          <form onSubmit={handleSubmit}>
            <div className="rows-fields">
              <TextField id="outlined-basic" label="Country" name="Country" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="End year" name="End year" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Impact" name="Impact" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="insight" name="insight" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
            </div>
            <div className="rows-fields">
              <TextField id="outlined-basic" label="Intensity" name="Intensity" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Likelihood" name="Likelihood" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Pestle" name="Pestle" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Published" name="Published" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
            </div>
            <div className="rows-fields">
              <TextField id="outlined-basic" label="Region" name="Region" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Relevance" name="Relevance" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Sector" name="Sector" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Source" name="Source" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
            </div>
            <div className="rows-fields">
              <TextField id="outlined-basic" label="Start Year" name="Start Year" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Title" name="Title" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Topic" name="Topic" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
              <TextField id="outlined-basic" label="Url" name="Url" variant="outlined" onClick={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
            </div>
            <div className="submit-btn">
              <Button variant="outlined" type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
