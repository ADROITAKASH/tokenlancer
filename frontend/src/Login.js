import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import Header from './Header';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {

        // const history = useHistory();
        // history.push("/browse-job");

        fetch('https://webhook.site/2491e7cf-0432-4f89-bd36-6c0d38cb0d57', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        }).then(function (response) {
            console.log(response)
            return response.json();
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Header />
                <div className='signin'>
                    <form onSubmit={this.handleSubmit}>
                        <h2><span class="entypo-login"><i class="fa fa-sign-in"></i></span> Login</h2>
                        <button class="submit" type="submit" value="Submit"><span class="entypo-lock"><i class="fa fa-lock"></i></span></button>
                        <span class="entypo-user inputUserIcon">
                            <i class="fa fa-user"></i>
                        </span>
                        <input type="text" class="user" placeholder="Name" value={this.state.value} name="name" onChange={this.handleChange} />
                        <span class="entypo-key inputPassIcon">
                            <i class="fa fa-key"></i>
                        </span>
                        <input type="text" class="pass" placeholder="Username" value={this.state.value} name="username" onChange={this.handleChange} />
                    </form>
                    <div class='vl'></div>
                    <form action="">
                        <h2><span class="entypo-login"><i class="fa fa-sign-in"></i></span> Signup</h2>
                        <button class="submit"><span class="entypo-lock"><i class="fa fa-lock"></i></span></button>
                        <span class="entypo-user inputUserIcon">
                            <i class="fa fa-user"></i>
                        </span>
                        <input type="text" class="user" placeholder="Name" />
                        <span class="entypo-key inputPassIcon">
                            <i class="fa fa-key"></i>
                        </span>
                        <input type="text" class="pass" placeholder="Username" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;