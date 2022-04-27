import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./form.css";
const init = {
  weight: "",
  pincode: "",
  deliveryType: "",
};

export const Form = () => {
  const [state, setState] = useState(init);
  const handleChange = (e) => {
    setState({ ...state, pincode: e.target.value });
  };
  const handleWeight = (e) => {
    setState({ ...state, weight: e.target.value });
  };
  const handleSelect = (e) => {
    setState({ ...state, deliveryType: e.target.value });
  };
  const handleCalculation = () => {
    if (state.weight == "" || state.pincode == "" || state.deliveryType == "") {
      alert("Please provide all info");
    } else {
      console.log(state);
    }
  };
  return (
    <div className="formDiv">
      <h2>Coin-Tab</h2>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="component-filled">Weight</InputLabel>
        <FilledInput id="component-filled" onChange={handleWeight} />
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="component-filled">Pincode</InputLabel>
        <FilledInput id="component-filled" onChange={handleChange} />
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">
          Delivery type
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={state.deliveryType}
          onChange={handleSelect}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"forward"}>Forward</MenuItem>
          <MenuItem value={"forward&rto"}>Forward & RTO</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        sx={{ m: 1, minWidth: 120 }}
        onClick={handleCalculation}
      >
        Calculate
      </Button>
    </div>
  );
};
