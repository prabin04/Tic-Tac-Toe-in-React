import React from 'react';

export default class Game extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            xIsNext: true,
            stepNumber:0,
            history:[
                { squares: Array(9).fill(Null) }
            ],
        };
    }
}