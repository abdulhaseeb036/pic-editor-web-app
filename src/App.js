import { useState } from 'react';
import './App.css';
import Slider from './slider'
import Sidebar from './sidebar'
import initialpic from './empty.jpg';

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg'
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },

]


function App() {
  const [pic, setPic] = useState(null);
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [selectOptionindex, setselectOptionindex] = useState(0)
  const currentOption = options[selectOptionindex]
  var picurl = initialpic;
  if (pic) {
    picurl = URL.createObjectURL(pic)
  }

 const onSliderChangeValue = ({target}) => {
    setOptions(prevOption => {
      return prevOption.map((option, index) => {
        if (index !== selectOptionindex) return option
        return {...option, value: target.value}
    })  
    })
  }

  function setImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
      console.log(filters)
    })
    return {filter: filters.join(' ') }
  
  }

  const downloadpic = e => {
    e.preventDefault()
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${pic}.png`); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
 console.log(setImageStyle())


  return (
    <div className="container">
      <h1 className="main-heading">Pic Editor</h1>
      <br />
      <div className="image"><img className="uploaded-img" style={setImageStyle()} src={picurl} /></div>
      <div className="sidebar">
        <input className="input-imgText" onChange={(e) => setPic(e.target.files[0])} type="file" accept="image/*" />
        {options.map((option, index) => {
          return (
            <Sidebar key={index} name={option.name} active={index === selectOptionindex} handleClick={() => setselectOptionindex(index)}/>
          
          )
        })}
        {/* <button onClick={downladpic()} download>download</button>       */}
        <a
        href={picurl}
        download
        onClick={e => downloadpic(e)}
      >download
      </a>

      </div>
      <Slider 
      min={currentOption.range.min}
      max={currentOption.range.max}
      value={currentOption.value}
      onChange={onSliderChangeValue}
      />
    </div>
  );
}

export default App;
