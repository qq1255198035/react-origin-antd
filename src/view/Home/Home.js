import React, { Component } from 'react';
import { Button } from 'antd';
import './Home.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
    }

    render() {
        return(
            <div className="Home">
                <h1>
                    hello react
                </h1>
                <Button type="primary" onClick={() => this.handleClick()}>
                    {this.state.isToggleOn ? 'On' : 'Off'}
                </Button>
            </div>
        )
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }
}

export default Home;
