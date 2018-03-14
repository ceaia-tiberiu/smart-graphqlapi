import React from 'react';
import SearchUser from './components/searchUser';
import UserInfo from './components/UserInfo';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'ceaia-tiberiu',
            username: null,
        };
    }

    handleOnChange = value => {
        this.setState({ value: value });
    };

    handleOnSubmit = event => {
        this.setState({ username: this.state.value });

        event.preventDefault();
    };

    render() {
        const { value, username } = this.state;
        return (
            <div>
                <SearchUser
                    value={value}
                    onChange={this.handleOnChange}
                    onSubmit={this.handleOnSubmit}
                />
                {this.state.username && <UserInfo user={username} />}
            </div>
        );
    }
}

export default App;
