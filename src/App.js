import React from 'react';

import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';


const API_KEY = "373d1a1f0dd59e296830aec2b6776ccc";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
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
        if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }

  render(){
    return(
        <div>
          <div className="wrapper">
            <div className="main">
              
            </div>
          </div>
        </div>
      );
  }
};
// <Titles />
//           <Form getWeather = {this.getWeather}/>
//           <Weather 
//               temperature={this.state.temperature} 
//               humidity={this.state.humidity}
//               city={this.state.city}
//               country={this.state.country}
//               description={this.state.description}
//               error={this.state.error}            
//           />

export default App; 