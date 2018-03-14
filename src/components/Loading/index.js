import React, { Component } from 'react';

import './style.css';
/**
 * Loading class, shows on the screen when there is a request from
 * graphql API or can be used in any other place
 */
class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dots: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.onTick, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onTick = () => {
        this.setState(prevState => ({ dots: (prevState.dots + 1) % 4 }));
    };

    render() {
        const { isCenter } = this.props;
        const { dots } = this.state;

        const classNames = ['loading'];

        if (isCenter) {
            classNames.push('loading_center');
        }

        return (
            <div className={classNames.join(' ')}>
                <small>Loading {new Array(dots).fill(0).map(dot => `.`)}</small>
            </div>
        );
    }
}

export default Loading;
