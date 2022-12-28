import React from 'react';
import Listing from './components/Listing';
import data from './data.json';

console.log(data);

function App() {
  return (
    <div className='wrapper'>
      <div className="item-list">
        <Listing items={data} />
      </div>
    </div>

  );
}

export default App;