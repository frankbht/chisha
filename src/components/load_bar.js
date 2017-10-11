import React, { Component } from 'react';
import {Circle} from 'rc-progress';

export default class LoadBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent: 0
        }
        this.increase = this.increase.bind(this);
    }

    componentDidMount(){
        this.increase();
    }

    increase(){
        let percent = this.state.percent + 1;
        if (percent >= 100) {
            clearTimeout(this.tm);
            if(this.refs.myref){
                this.setState({percent:0});
            }
            percent = 0;
            this.increase();
        }
        if(this.refs.myref){
            this.setState({percent});
        }
        this.tm = setTimeout(this.increase, 1000);
    }

    render(){
        return(
            <div style={{ margin: 5, width: 20 }} ref = "myref">
                <Circle percent={this.state.percent} strokeWidth="10" strokeLinecap	= "butt" strokeColor="#2732ce" />
                <p style={{fontSize : 36,color: '#2732ce', width: 2000 }}>玩命加载中...</p>
            </div>
        )
    }


}
