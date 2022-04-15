import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import { SettingDetailsContainer, SettingsContainer } from "./styles";

const Settings = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Navbar />
      <SettingsContainer container justifyContent={'center'}>

        <SettingDetailsContainer container item xs={6}>
        <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        </SettingDetailsContainer>
      </SettingsContainer>
    </>
  );
};

export default Settings;
