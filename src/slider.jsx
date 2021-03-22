import React, { useState }  from 'react'
import './App.css';
import {Typography, Slider} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
function Slidercom({min,max,value,onChange}) {
    const [updatevalue, setUpdatevalue] = useState(0)
    return (
        <div className="slider-container">
        {/* <PrettoSlider className="slider" valueLabelDisplay="auto" aria-label="pretto slider" defaultValue="0"
        min={min}
        max={max}
        value={setUpdatevalue(value)}
        onChange={onChange}
        /> */}
            <input type="range" className="slider" 
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            
            />
        </div>
    )
}
export default Slidercom;
