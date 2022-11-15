
import './App.css';
import React from 'react';

// function App(props) {
//   return (
//     <div className="App">
//      <h1>{props.type}</h1>
//     </div>
//   );
// }

// export default App;

export default class App extends React.Component {
    render () {
        return (
            <div className="App">
                <h1>{this.props.type}components</h1>
            </div>
        );
    }
}