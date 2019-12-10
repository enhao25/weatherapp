import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import './App.css'

class App extends Component {
    // Constructor of the App, according to react lifecycle, constructor will run first when running the web
    // As the class has state, we can call them smart component
    constructor(){
        super()
        this.state = {
            cats: [],
            searchfield: ''
        }
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
        const { cats, searchfield } = this.state
        const filteredCats = cats.filter(cat =>{
            return cat.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        }) 
        if (cats.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f2">CatFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <Cardlist cats={filteredCats} />
                    </Scroll>
                </div>
            )
        }
    }

    componentDidMount(){
        // Fetch helps us to get from http, then, get the response and return it, then set the state to cats : users
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return response.json()})
            .then(users=> {{this.setState({cats: users})}})
    }
    
}

export default App;