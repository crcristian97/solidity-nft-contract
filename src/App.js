import React from "react";
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <h1>Card Game</h1>
            <button onClick={init}>Mint Card</button>
        </div>
    );
}

export default App;
