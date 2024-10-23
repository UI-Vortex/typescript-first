import React, { createContext } from 'react';
import { HairColor, Person } from './components/Person';

interface AppContextInter {
  name: string;
  age: number;
  country: string;
  food: string;
}

const AppContext = createContext<AppContextInter | null>(null)

function App() {

  const contextWalker: AppContextInter = {
    name: "Walker",
    age: 20,
    country: 'U.S.A',
    food: 'I like something to eat for dinner'
  }

  return (
    <AppContext.Provider value={contextWalker}>
      <div className="Person">
        <h1>{contextWalker.food}</h1>
        <Person name='Walker' age={20} email='Walker@gmail.com' hairColor={HairColor.Blonde} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
