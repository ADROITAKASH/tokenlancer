import React from 'react';
// import { useHistory } from 'react-router-dom';
import './Login.css';
import user_name from './user_name'
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
        fetch('https://tokenlancer.uc.r.appspot.com/api/accountservice/', {  //  /api/accountservice/
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then(function (response) {
            console.log(response)
            // return history.push('/browse-job')
            // if (response =='Username already taken') {
            //     let error = document.getElementById('error_msg')
            //     error.innerText = `Username already taken`
            // let red = document.getElementById('username')
            // red.classList.add("red");
            // error.innerText = `Username already taken`
            // }
            // else if (response =='Posted Successfully') {
            //     <Redirect to={/browse-job} />
            // }
            return response.json();
        });

        event.preventDefault();
    }

    handleSignup = (event) => {
        fetch('https://tokenlancer.uc.r.appspot.com/api/accountservice/', {  //  /api/accountservice/
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then(function (response) {
            console.log(response)
            // return history.push('/browse-job')
            // if (response =='Username already taken') {
            //     let error = document.getElementById('error_msg')
            //     error.innerText = `Username already taken`
            // let red = document.getElementById('username')
            // red.classList.add("red");
            // error.innerText = `Username already taken`
            // }
            // else if (response =='Posted Successfully') {
            //     <Redirect to={/browse-job} />
            // }
            return response.json();
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Header />
                <div className='signin'>
                    {console.log("username is ......"+user_name)}
                    <form onSubmit={this.handleSubmit}>
                        <h2 className='heading'><span className="entypo-login"><i className="fa fa-sign-in"></i></span> Signin</h2>
                        <div className='input'>
                            <div className='left'>
                                <div className='material-textbox'>
                                    <input type="text" value={this.state.value} name="name" id='name'onChange={this.handleChange} required />
                                    <label>Name</label>
                                </div>
                                <div className='user'>
                                    <div className='material-textbox' id='username'>
                                        <input type="text" value={this.state.value} name="username" onChange={this.handleChange} required />
                                        <label>Username</label>
                                    </div>
                                </div>
                                <div id="error_msg"></div>
                            </div>
                            <button className="submit sub-one" type="submit" value="Submit"><span className="entypo-lock"><i className="fa fa-lock"></i></span></button>

                        </div>
                    </form>

                    {/* <div className='vl'></div> */}

                    <form onSubmit={this.handleSignup}>
                        <h2 className='heading'><span className="entypo-login"><i className="fa fa-sign-in"></i></span> Signup</h2>
                        <div className='input'>
                            <div className='left'>
                                <div >
                                    <div className='material-textbox'>
                                        <input type="text" value={this.state.value} name="username" onChange={this.handleChange} required />
                                        <label>Username</label>
                                    </div>
                                </div>
                            </div>
                            <button className="submit" type="submit" value="Submit"><span className="entypo-lock"><i className="fa fa-lock"></i></span></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;