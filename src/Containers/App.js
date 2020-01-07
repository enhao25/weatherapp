import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary'
import './App.css'

class App extends Component {
    // Constructor of the App, according to react lifecycle, constructor will run first when running the web
    // As the class has state, we can call them smart component
    constructor(){
        super()
        this.state = {
            searchfield: '',
            sgweather: []
        }
    }

    getWeatherDetails = (weatherData) => {
        var Stations = weatherData['metadata']['stations']
        var Weather = weatherData['items'][0]['readings']
        
        for( var index in Stations ){
            Stations[index]["weather"] = Weather[index]['value']
        }
        this.setState({ sgweather: Stations })
    }

    // Function
    // Use the below syntax instead of onSearchChange(event), else this will refer to place place it is called
    // which is at the searbox.js 
    onSearchChange = (event) => {
        // event.target.value is the value that is keyed in the search box
        this.setState({ searchfield: event.target.value })
    }

    // Render which is mandatory for a class
    render(){
        const { searchfield, sgweather  } = this.state

        const filteredWeather = sgweather.filter(place =>{
            return place.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        }) 
        if (sgweather.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f2">Weather Search</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist weathers={filteredWeather} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }

    componentDidMount(){
        
        fetch('https://api.data.gov.sg/v1/environment/air-temperature')
            .then(response => {return response.json()})
            .then(data => this.getWeatherDetails(data))
    }
    
}

export default App;