import React from 'react';
import Popup from 'reactjs-popup';
import './ProjectContainer.css';

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tokensPerHour: '',
            totalHours: '',
            description: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('https://webhook.site/2491e7cf-0432-4f89-bd36-6c0d38cb0d57', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        })
            .then(function (response) {
                console.log(response)
                return response.json();
            });

        event.preventDefault();
    }

    render() {
        return (
            <div className='project' key={this.props.job.jobId}>
                <div className="project__bottom">
                    <h3 style={{ textAlign: 'left' }} >{this.props.job.hirer}</h3> {/* name for hirer */}
                    <h2 style={{ textAlign: 'center' }} >{this.props.job.title}</h2> {/* name for Job */}
                    <div className='background'>
                        <h3>{this.props.job.description}</h3> {/* Job description*/}
                    </div>
                    <h4>Skills: {this.props.job.skills}</h4> {/* skills required */}
                    <Popup
                        trigger={<button class="bubbly-button button"> ✔ Apply </button>}
                        modal
                        nested
                    >

                        {close => (
                            <div className='conflict'>
                                <div className="modals">
                                    <button className="close" onClick={close}>
                                        &times;
                                </button>
                                    <div className="header"> {this.props.job.title} </div>
                                    <div className="content">
                                        <form onSubmit={this.handleSubmit} className='form'>
                                            <div className='material-textbox formItems' id='tokensPerHour'>
                                                <input type="text" value={this.state.value} name="tokensPerHour" onChange={this.handleChange} required />
                                                <label>Price of hourly tokens</label>
                                            </div>
                                            <div className='material-textbox formItems' id='totalHours'>
                                                <input type="text" value={this.state.value} name="totalHours" onChange={this.handleChange} required />
                                                <label>Approximate no. of hours to finish</label>
                                            </div>
                                            <div className='material-textbox formItems' id='description'>
                                                <input type="text" value={this.state.value} name="description" onChange={this.handleChange} required />
                                                <label>Tell me about yourself</label>
                                            </div>

                                            <input type="submit" value="Submit" className='bubbly-button button' />
                                        </form>
                                    </div>
                                </div>
                            </div>

                        )}
                    </Popup>
                </div>
            </div>
        );
    }
}
export default ProjectContainer;