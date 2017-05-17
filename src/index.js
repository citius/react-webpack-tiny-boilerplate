import React from 'react';
import {render} from 'react-dom';

const SimpleApp = () => {
  return (
    <div className="app__content">
      Hello, awesome world!
    </div>
  );
}

render(<SimpleApp/>, document.getElementById('app'));
