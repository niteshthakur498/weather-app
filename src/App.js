import React from 'react';

import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';


const API_KEY = "373d1a1f0dd59e296830aec2b6776ccc";

class App extends React.Component{
  getWeather = async (e) => {
    e.preventDefault();
    // fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metrics`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  render(){
    return(
        <div>
          <Titles />
          <Form getWeather = {this.getWeather}/>
          <Weather />
        </div>
      );
  }
};


export default App; 