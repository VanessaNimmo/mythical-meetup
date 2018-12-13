import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalBeings: 0,
      beings: [
        {
          name: 'Unicorn',
          count: 0,
          emoji: '🦄',
          realm: 'Harry Potter'
        },
        {
          name: 'Moaning Myrtle',
          count: 0,
          emoji: '👻',
          realm: 'Harry Potter'
        },
        {
          name: 'Oliphant',
          count: 0,
          emoji: '🐘',
          realm: 'Middle Earth'
        },
        {
          name: 'Loch Ness Monster',
          count: 0,
          emoji: '🐉',
          realm: 'Scotland'
        },
        {
          name: 'Falcor',
          count: 0,
          emoji: '🦁',
          realm: 'The Never-Ending Story'
        },
        {
          name: 'Cookie Monster',
          count: 0,
          emoji: '🍪',
          realm: 'Sesame Street'
        }
      ]
    }
  }
  updateAttendees(beingToFind, operator) {
    const being = this.state.beings.find(being => being.name === beingToFind)
    if(operator==='add') {
      being.count++
      const currentNum = this.state.totalBeings
      this.setState({totalBeings: currentNum + 1})
    } else {
      if(being.count===0) {
        alert(`No ${being.name}s are available to be kicked out!`)
      } else {
        being.count--
        const currentNum = this.state.totalBeings
        this.setState({totalBeings: currentNum - 1})
      }
    }
  }
  countRealms(realms) {
    console.log(realms)
    const nonNullRealms = []
    realms.forEach(realm => {
      if(realm) {
        nonNullRealms.push(realm)
      }
    } 
    )
    const realmNames = []
    const realmCounts = []
    nonNullRealms.forEach(realm => {
      if(realmNames.includes(realm)) {
        realmCounts[realmNames.indexOf(realm)]++
      } else {
        realmNames.push(realm)
        realmCounts.push(1)
      }
    })
    const realmObjects = realmNames.map((realm, i) => {
      return {name: realm, count: realmCounts[i]}
    })
    return realmObjects
  }
  render() {
    return (
      <div className="App">
        <h1>Mythical MeetUp</h1>
        <h2>Attendees: {this.state.totalBeings}</h2>
        {this.state.beings.map(being => <h3 key={being.name}>{being.name}s <span role="img" aria-label={being.name}>{being.emoji}</span> from {being.realm}: {being.count}</h3>)}
        <p>
          {this.state.beings.map(being => 
            <button onClick={this.updateAttendees.bind(this, being.name, 'add')} key={being.name}>Add a {being.name}</button>
          )}
        </p>
        <p>
          {this.state.beings.map(being => 
          <button onClick={this.updateAttendees.bind(this, being.name)} key={being.name}>Remove a {being.name}</button>
        )}
        </p>
        {(this.countRealms(this.state.beings.map(being => {
          return (being.count > 0) ? being.realm : null
        }))).map(realm => <h3>{realm.count} type(s) of representatives from {realm.name}</h3>

        )}
      </div>
    );
  }
}

export default App;