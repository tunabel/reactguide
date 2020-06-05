import React, {Component} from 'react';
// import logo from './logo.svg';
import classStyle from './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {id: 'pers01', name: 'Max', age: 10},
            {id: 'pers02', name: 'Ruth', age: 20},
            {id: 'pers03', name: 'Mike', age: 15}
        ],
        username: 'mamacita',
        arePersonsShown: false,
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const persons = [...this.state.persons];
        persons[personIndex].name = event.target.value;

        this.setState(
            {
                persons: persons
            }
        );
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({
            persons: persons,
        })
    }

    togglePersons = () => {
        const areShown = this.state.arePersonsShown;
        this.setState(
            {
                arePersonsShown: !areShown,
            }
        );
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '2px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }

        let persons = null;
        if (this.state.arePersonsShown) {
            persons = (
                <div>
                    {this.state.persons.map((person,index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                change={(event)=>this.nameChangeHandler(event, person.id)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                            />
                        )
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(classStyle.green);
        }
        if (this.state.persons.length <=1) {
            classes.push(classStyle.size30);
        }

        return (
                <div className={classStyle.App}>
                    <h1>Hello por ahí! </h1>
                    <p className={classes.join(' ')}>Text transformation based on number of Persons</p>
                    <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
                    {persons}
                </div>
        )
    }


}

export default (App);