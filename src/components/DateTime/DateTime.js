import React, { Component } from 'react';
import './DateTime.css'

export default class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        console.log('mount');
        this.timerId = setInterval(() => { this.updateDateTime() }, 1000)
    }
    componentWillUnmount() {
        console.log('unmount');
        clearInterval(this.timerId);
    }
    updateDateTime() {
        console.log('update date');
        this.setState({
            date: new Date()
        });
    }
    _getOurDate() {
        const dt = this.state.date.toUTCString();
        return dt;
    }
    _getOurTime() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const dt = this.state.date.toLocaleTimeString('ru', options);
        return dt;
    }
    render() {
        return (
            <div className='dateTimeContent'>
                Сегодня: {this._getOurTime()}
            </div>
        )
    }
}

