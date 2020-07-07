import React from "react";

export class Graph extends React.Component{
    constructor(props) {
        super(props);
        this.param = {};
    }

    initParam(data){
        this.param = {
            sectionsTime:6,
            sectionsValue:6,
            val_max: () => {
                return data.columns.slice(1).map(values => Math.max.apply(null, values.slice(1)));
            },
            val_min:() => {
                return data.columns.slice(1).map(values => Math.min.apply(null, values.slice(1)));
            },
            stepSize: 10,
            columnSize: 50,
            rowSize: 50,
            margin: 20,
            xAxisTime: () => {
                return data.columns[0].slice(1);
            }
        }
    }

    draw(date){
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        d
    }

    componentDidMount() {
        this.initParam(this.props.data);
        const date = this.param.xAxisTime();
        const maxVal = this.param.val_max();
        this.draw(date);
    }

    render() {
        return(
            <canvas id="canvas" width={this.props.params.chartWidth} height={this.props.params.chartHeight}/>
        );
    }
}