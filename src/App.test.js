import React from 'react';
import ReactDOM from 'react-dom';
import MarvelSearch from './components/MarvelSearch/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarvelSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
