import React from 'react';
import './App.css';
import jsonData from "./../Data/data.json";
import ChartFollowers from "./../ChartFollowers";

export class App extends React.Component{
    constructor(props) {
        super(props);
        this.params = {
            chartWidth: 1200,
            chartHeight: 500,
        }
    }

    render(){

        return (
            <div className="App charts-container">
                <ChartFollowers params={this.params} name={"Followers"} data={jsonData[0]}/>
            </div>
        );
    }
}

export default App;