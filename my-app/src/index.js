import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class IslandSnow extends React.Component {

  render() {
    return (
        <h1>Island Snow!</h1>
  );
  }
}

ReactDOM.render(<IslandSnow />, document.getElementById('root'));