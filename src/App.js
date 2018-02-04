import React, { Component } from 'react';

// const API_URL = 'https://contact-app-server.herokuapp.com/contacts'

function Hello(props) {
  return (
    <div>
      Hello {props.name}. Your age {props.umur}
      <button 
        onClick={props.fn}
      >
        Hapus
      </button>
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeName: 'A fancy store',
      friends: [
        { name: 'Tesla', age: 10 },
        { name: 'Michell', age: 11 },
        { name: 'Sofia', age: 12 },
        { name: 'Helo', age: 13 },
        { name: 'Jakarta', age: 20 },
      ],
    };
  }

  removeFriendByIndex = (index) => {
    const teman = this.state.friends;
    const sisaTeman = teman.filter((el, i) => i !== index)

    this.setState({ friends: sisaTeman })
  }

  render() {
    const teman = this.state.friends;
    
    return (
      <div className="App">
        <p>{this.state.storeName}</p>
        {teman.map((el, i) => {
          const id = Math.random().toString();

          return <Hello key={id} umur={el.age} name={el.name} fn={() => {
            this.removeFriendByIndex(i)
          }} />
        })}
      </div>
    );
  }
}

export default App;
