import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { SettingDetailsContainer, SettingsContainer } from "./styles";
import { IoHandRightSharp } from "react-icons/io5";
import { FaHandPointLeft, FaHandPointRight, FaHandRock } from "react-icons/fa";
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill, BsArrowRight } from "react-icons/bs";
import Button from "../../components/Button"
import { useDispatch, useSelector } from "react-redux";
import { changeGesture, selectGestureState } from "../../features/gestureSlice";


const Settings = () => {
  const dispatch = useDispatch();
  const gestureState = useSelector(selectGestureState);
  const [gesture, setGesture] = React.useState('');
  const [func, setFunc] = React.useState('');

  const handleGestureChange = (event) => {
    setGesture(event.target.value);
  };
  const handleFuncChange = (event) => {
    setFunc(event.target.value);
  };



  const handleUpdateGesture = () => {
  const updates = {
    gesture,
    func
  }
  dispatch(changeGesture(updates));
  console.log(gestureState)
  }



  return (
    <>
      <Navbar />
      <SettingsContainer container justifyContent={'center'}>

        <SettingDetailsContainer container item xs={10} alignItems={'center'} spacing={2}>
        <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gesture</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gesture}
            label="Gesture"
            onChange={handleGestureChange}
          >
            <MenuItem value={'open_hand'}>
              <IoHandRightSharp />
            </MenuItem>
            <MenuItem value={'point_left'}><FaHandPointLeft /></MenuItem>
            <MenuItem value={'point_right'}><FaHandPointRight/></MenuItem>
            <MenuItem value={'thumbs_up'}><BsFillHandThumbsUpFill/></MenuItem>
            <MenuItem value={'thumbs_down'}><BsFillHandThumbsDownFill/></MenuItem>
            <MenuItem value={'close_hand'}><FaHandRock/></MenuItem>
            
          </Select>
        </FormControl>
        </Grid>
        <Grid container justifyContent={'center'} item xs={1} >
          <BsArrowRight fontSize={'20px'}/>
        </Grid>
        <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Function</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={func}
            label="Function"
            onChange={handleFuncChange}
          >
            <MenuItem value={'play'}>
              Play
            </MenuItem>
            <MenuItem value={'pause'}>Pause</MenuItem>
            <MenuItem value={'mute'}>Mute</MenuItem>
            <MenuItem value={'rewind'}>Rewind</MenuItem>
            <MenuItem value={'fastForward'}>Fast Forward</MenuItem>
            
          </Select>
        </FormControl>
        </Grid>
        </SettingDetailsContainer>
        <Grid container item justifyContent={'center'}>
            <Button handleClick={handleUpdateGesture}>
                  Set
            </Button>
        </Grid>
      </SettingsContainer>
    </>
  );
};

export default Settings;
