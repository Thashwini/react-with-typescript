import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface IState {
  name: string;
  age: number;
  url: string;
  note?: string;
}
[];

function App() {
  const [people, setPeople] = useState<IState[]>([]);

  // people.map(person=>{
  //   person.
  // })
  return (
    <div className="App">
      <h1>People Invited to my Partyy</h1>
    </div>
  );
}

export default App;
