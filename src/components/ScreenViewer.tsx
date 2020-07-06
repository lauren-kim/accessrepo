import * as React from 'react';
//import * as ReactDOM from 'react-dom';

interface IProps {
    pic1: any;
    pic2: any;
}

interface IState {
    onIndex: number;
    screens: any;
}

export class ScreenViewer extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        
        const screen1 = this.props.pic1; //string = require('../assets/images/james_photo.jpg');
        const screen2 = this.props.pic2;//string = require('../assets/images/jina_photo.jpg');
        this.state = {
            onIndex: 0,
            screens: [screen1, screen2],
        }

        this.onClickBack = this.onClickBack.bind(this);
        this.onClickForward = this.onClickForward.bind(this);
    }

    onClickBack() {
        if (this.state.onIndex === 0) {
            this.setState({
                onIndex: this.state.screens.length - 1,
            })
        }
        else {
            this.setState({
                onIndex: this.state.onIndex - 1,
            })
        }
    }

    onClickForward() {
        if (this.state.onIndex === this.state.screens.length - 1) {
            this.setState({
                onIndex: 0,
            })
        }
        else {
            this.setState({
                onIndex: this.state.onIndex + 1,
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickBack}>Back</button>
                <button onClick={this.onClickForward}>Forward</button>
                <br />
                <img src={this.state.screens[this.state.onIndex]} alt={this.state.onIndex.toString()}/>
            </div>
            )
    }
}