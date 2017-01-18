import React from 'react';
import ReactDOM from 'react-dom';
import Table  from './components/table';

const App = ()=>{
    return (
        <div >
        <h1 className="lead">Camper Leaderboard </h1>
        <Table />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));