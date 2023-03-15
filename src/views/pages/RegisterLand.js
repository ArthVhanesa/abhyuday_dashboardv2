import React, { useState, useEffect } from "react";
import { TextField, FormControl, Autocomplete, Button } from "@mui/material";
import { AddNewLand } from "../../functions/LandAssets/AddNewLand";

const RegisterLand = () => {
  const [landPrice, setLandPrice] = useState(0);

  const [land, setLand] = useState({
    area: "",
    land_address: "",
    property_id: "",
    physical_number: "",
    geo_json: [],
    transactions: []
  });

  const styles = {
    form: {
      padding: "3rem",

      width: "50%",
      display: "flex",
      justifyContent: "space-between",
    },
  };

  useEffect(() => {
    // GetUserLandDetails();
  }, []);

  const onclick = async () => {
    const tx = await AddNewLand(landPrice, land);
    if (tx) {
      console.log(tx);
    } else {
      console.log("error");
    }
  };

  return (
    <div className="flex justify-center h-screen">
      <FormControl margin="normal" style={styles.form}>
        <p className="text-3xl w-full text-center mt-2">Register Land</p>
        {/* form code goes here */}
        <TextField
          value={land.property_id}
          onChange={(e) => setLand({ ...land, property_id: e.target.value })}
          id="outlined-basic"
          label="Property ID"
          variant="outlined"
        />
        <TextField
          value={land.physical_number}
          onChange={(e) =>
            setLand({ ...land, physical_number: e.target.value })
          }
          id="outlined-basic"
          label="Survery NO."
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          type="text"
          value={land.land_address}
          onChange={(e) => setLand({ ...land, land_address: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="total area in sqft"
          variant="outlined"
          type="number"
          value={land.area}
          onChange={(e) => setLand({ ...land, area: e.target.value })}
        />

        <TextField
          id="outlined-basic"
          label="total area in sqft"
          variant="outlined"
          type="number"
          value={landPrice}
          onChange={(e) => setLandPrice(e.target.value)}
        />
        <Button onClick={() => onclick()} variant="contained" component="label">
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default RegisterLand;
