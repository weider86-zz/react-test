import React from 'react';
import Link from '../Link';
import Greeting from '../Greeting';
import ToggleText from '../ToggleText';

function App() {
  return (
    <div className="App">
      <Greeting name={"follow me on:"} />
      <Link page={"https://github.com/weider86"}>GitHub</Link>
      <hr />
      <ToggleText />
    </div>
  );
}

export default App;
