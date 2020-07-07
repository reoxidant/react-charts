import React from "react";
import './ChartFollowers.css';
import Graph from "./../Graph";

export class ChartFollowers extends React.Component{
    constructor(props) {
        super(props);
    }

    drawPoint(){

    }

    drawGraph(columns){

        /*columns.map((line)=> {
            if(line.slice(0,1) == 'x'){
                const arrDate = line.slice(1).map(date => {
                    const md = new Date(date);
                    return md.getMonth() + " " + md.getDay();
                });
                console.log(arrDate);
            }
            else if(line.slice(0,1) == 'y0'){

            }
            else if(line.slice(0,1) == 'y1'){

            }
        });*/
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            const {columns,types,names,colors} = this.props.data;
            this.drawGraph(columns);
        })
    }

    render() {
        return (
            <div className="chart-app">
                <div className="header">
                    {this.props.name}
                </div>
                <div className="content">
                    <Graph params={this.props.params} data={this.props.data}/>
                </div>
                <div className="info">

                </div>
                <div className="preview">

                </div>
                <div className="buttons">

                </div>
            </div>
        )
    }
}
