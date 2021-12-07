import './App.css';
import {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      monsters: [],
      searchField: ''
    };

  }


  componentDidMount() {
    console.log("Retrieving Users");

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));

    console.log("Retrieved Users");
  }

  render() {

    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (

      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>

      </div>
    );
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

}

export default App;
